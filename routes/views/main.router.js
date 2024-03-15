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

//чтобы получить не все посты, а один, я делаю уточнение по параметру, проваливание в посты 
router.get('/:categoryId', (req, res) => {
    const { categoryId } = req.params
    //забирает тот параметр, который указали после posts, отправляет в компонент
    const category = React.createElement(Category, { title: 'Фильмы', categoryId })
    const html = ReactDOMServer.renderToStaticMarkup(category)
    res.send(`<!DOCTYPE html>${html}`)
})

module.exports = router;

