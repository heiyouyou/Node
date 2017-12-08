var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var index = require('./routes/index');
var users = require('./routes/users');
var course = require('./routes/course');
//引入handlebars的模板对象
var handlebars = require("express3-handlebars").create({
  defaultLayout:"layout",//设置默认布局的文件，但是必须放在/views/layouts/目录下面
  extname:".html"//更改handlebars模板的扩展名
});

var app = express();
// view engine setup，注释原来的模板引擎
//app.set('view engine', 'jade');

//设置handlebars模板引擎
//app.engine("handlebars",handlebars.engine);
//app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine("html",handlebars.engine);
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
//循环路由配置
for(key in course){
  app.get('/course/'+key,course[key]);
};

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  //将错误信息打印到本地日志文件
  fs.appendFileSync(__dirname+'/error.log',err.status+'\n'+err.message+'\n'+err.stack+'\n');
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
