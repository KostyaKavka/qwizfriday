const bcrypt = require('bcrypt');
const router = require('express').Router();
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');

router.post('/registration', async (req, res) => {
  try {
    const { email, name, password } = req.body;

    let user;

    user = await User.findOne({ where: { email } });

    if (user) {
      res.status(200).json({ message: 'Такой пользователь уже существует' });
      return;
    }

    const hpassword = await bcrypt.hash(password, 10);

    const userInDb = await User.create({
      email, name, password, password: hpassword,
    });

    user = await User.findOne({
      where: { id: userInDb.id },
      attributes: ['name', 'id'],
    });
    if (user) {
      res.locals.user = user;
      const { accessToken, refreshToken } = generateTokens({ user });
      res
        .cookie('access', accessToken)
        .cookie('refresh', refreshToken)
        .status(201)
        .json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/authorization', async (req, res) => {
  let user;
  try {
    const { email, password } = req.body;

    user = await User.findOne({
      where: { email },
      attributes: ['password', 'name', 'id'],
    });
    if (!user) {
      res.json({ message: 'Такого пользователя нет / неверный пароль' });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: 'Такого пользователя нет / неверный пароль' });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({ user });

    // устанавливаем куки
    res
      .cookie('access', accessToken)
      .cookie('refresh', refreshToken)
      .status(201)
      .json({ message: 'success' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/logout', (req, res) => {
  try {
    res.locals.user = undefined;
    res.clearCookie('access').clearCookie('refresh');
    res.redirect('/');
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;