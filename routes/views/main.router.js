const router = require('express').Router();
const MainPage = require('../../components/MainPage');

router.get('/', (req, res) => {
    const user = res.locals.user;
    res.send(res.renderComponent(MainPage, { title: 'Main page', user }))
})

module.exports = router;

