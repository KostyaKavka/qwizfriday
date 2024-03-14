const express = require('express');
const router = express.Router();

//views
const mainRouter = require('./views/main.router')

//route views
router.use('/', mainRouter)



module.exports = router;