var express = require('express');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// cookie-session中间件的载入
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');

//自定义模块的载入
var tag = require('./core/tag');
var index = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');

//测试dao
// var dao = require('./routes/dao');
var dao = require('./routes/test');

// handlebars模块
var handlebars = require('express3-handlebars').create({
  //layoutsDir:'views/myLayouts/',//layoutDir可以更改视图默认模板文件的默认目录layouts
  //partialsDir: 'views/partials/',//partialsDir可以更改局部文件的默认目录partialsDir
  defaultLayout:'layout',
  extname:'html',
  helpers:tag//helpers属性可以通过对象将自定义的方法集成到handlebars中使用
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',handlebars.engine);
app.set('view engine','html');
//禁止浏览器响应头的相关技术特征显示
app.disable('x-powered-by');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/user', test);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//服务器出错
app.use(function(req, res, next) {
  var err = new Error('服务器错误了...');
  err.status = 500;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  //将错误信息打印到本地日志文件
  fs.appendFileSync(__dirname+'/error.log',tag.formatDate(Date.now())+'\n'+err.status+'\n'+err.message+'\n'+err.stack+'\n');
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
