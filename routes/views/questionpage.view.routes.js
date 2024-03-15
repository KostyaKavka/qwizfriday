const router = require('express').Router()
const QuestionPage = require('../../components/QuestionPage')
const {Question}= require('../../db/models')

router.get('/ques', async (req, res) => {

    try { const questions= await Question.findAll()
        // console.log(questions);
        const html=res.renderComponent(QuestionPage, { questions })
        console.log(html);
        res.send(html)
    } catch ({massage}) {
        res.status(500).json({error: massage})
    }
   

})

module.exports = router;