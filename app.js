require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const middlewareLogRequest = require('./middleware/log');


var indexRouter = require('./routes/index');
var projectTypeRouter = require('./routes/type');
var projectRouter = require('./routes/project');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(middlewareLogRequest);
app.use('/', indexRouter);
app.use('/type', projectTypeRouter);
app.use('/project', projectRouter);




module.exports = app;
