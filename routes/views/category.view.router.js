const router = require('express').Router()
const { Category } = require('../../db/models')
const CategoryItems = require('../../components/CategoryItems')

router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll()
        res.send(res.renderComponent(CategoryItems, { categories }))
    } catch ({ message}) {
        res.status(500).json({ error: message })
    }
    
})

module.exports = router;