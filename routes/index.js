const express = require('express');
const router = express.Router();

//views
const mainRouter = require('./views/main.router')

//route views
router.use('/', mainRouter)



module.exports = router;


















//view
const authViewRouter = require('./views/auth.view.router');

//api
const authApiRouter = require('./api/auth.api.router');

//router view
router.use('/auth', authViewRouter);

//router api
router.use('/api/auth', authApiRouter);