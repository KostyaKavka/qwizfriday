const router = require('express').Router();

//view
const authViewRouter = require('./views/auth.view.router');
const mainRouter = require('./views/main.router')
const questionPage=require('./views/questionPage.view.router')
//api
const authApiRouter = require('./api/auth.api.router');

//router view
router.use('/auth', authViewRouter);
router.use('/', mainRouter)
router.use('/ques', questionPage)

//router api
router.use('/api/auth', authApiRouter);



module.exports = router;