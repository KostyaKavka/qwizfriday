const router = require('express').Router();

//view
const authViewRouter = require('./views/auth.view.router');
const mainRouter = require('./views/main.router')
const questionPage=require('./views/questionpage.view.routes')
//api
const authApiRouter = require('./api/auth.api.router');

//router view
router.use('/auth', authViewRouter);
router.use('/', mainRouter)
router.use('/question', questionPage)

//router api
router.use('/api/auth', authApiRouter);



module.exports = router;