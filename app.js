require('@babel/register');

const express = require('express');
const indexRouter = require('./routes/index.router');
const serverConfig = require('./config/serverConfig');

const app = express();
serverConfig(app);

const PORT = 3000;

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Команда УХ работаем до двух с двух `);
});