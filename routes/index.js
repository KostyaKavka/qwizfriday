const express = require('express');
const router = express.Router();



module.exports = router;


















//view
const authViewRouter = require('./views/auth.view.router');

//api
const authApiRouter = require('./api/auth.api.router');

//router view
router.use('/auth', authViewRouter);

//router api
router.use('/api/auth', authApiRouter);