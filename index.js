const path = require('path');
const express = require('express');
const session = require('express-session');
const logger = require('morgan');

const todoRouter = require('./routes/todo');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.use('/todo', todoRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('app started!');
});
