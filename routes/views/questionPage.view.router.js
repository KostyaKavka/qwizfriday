const router = require('express').Router()
const QuestionPage = require('../../components/QuestionPage')
const {Question}= require('../../db/models')

router.get('/:id', async (req, res) => {

    try { 
        const {id} = req.params;
        
        const question = await Question.findOne({where: {id}})
    
        // console.log(questions);
        const html=res.renderComponent(QuestionPage, { question })
        // console.log(html);
        res.send(html)
    } catch ({massage}) {
        res.status(500).json({error: massage})
    }
   

})

module.exports = router;