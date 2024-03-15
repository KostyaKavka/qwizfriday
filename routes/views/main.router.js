const router = require('express').Router()
const MainPage = require('../../components/MainPage')
const { Category } = require('../../db/models')

router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll()
        res.send(res.renderComponent(MainPage, { categories }))
    } catch ({ message}) {
        res.status(500).json({ error: message })
    }
    
})

module.exports = router;

