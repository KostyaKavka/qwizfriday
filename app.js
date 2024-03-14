require('@babel/register');
const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index');
const ssr = require('./middleware/ssr');
// const getUser = require('./middleware/getUser');

app.use(express.urlencoded({ extended: 'true' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);
// app.use(getUser);

app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Команда УХ работаем до двух с двух  `);
});