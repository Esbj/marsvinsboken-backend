var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var guiennapigRouter = require('./routes/guiennapig');
const mysql = require('mysql2')

var app = express();

app.locals.con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  database: "guiennapigs",
  user: "guiennapigs",
  password: "guiennapigs"
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/guiennapigs', guiennapigRouter);

module.exports = app;
