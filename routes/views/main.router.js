const router = require('express').Router()
const MainPage = require('../../components/MainPage')
const { Category } = require('../../db/models')

router.get('/', async (req, res) => {
  const user = res.locals.user;
    try {
        const categories = await Category.findAll()
        res.send(res.renderComponent(MainPage, { title: 'Main Page', categories, user }))
    } catch ({ message}) {
        res.status(500).json({ error: message })
    }
})

module.exports = router;

