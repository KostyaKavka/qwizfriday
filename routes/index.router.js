const express = require('express');
const router = express.Router();

//view
const authViewRouter = require('./views/auth.view.router');
const mainRouter = require('./views/main.router')

//api
const authApiRouter = require('./api/auth.api.router');

//router view
router.use('/auth', authViewRouter);
router.use('/', mainRouter)

//router api
router.use('/api/auth', authApiRouter);



module.exports = router;
