var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
////构建模块
//var build = require("./utils/build").create("student");
////路由注册
//var core = require("./utils/core");

//自定义模块的载入
var tag = require('./core/tag');
var index = require('./routes/index');
var users = require('./routes/users');
var content = require('./routes/content');
var handlebarsRouter = require('./routes/handlebars');
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
//app.set('view engine', 'jade');
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

//app.use()可以用来组件注册、app文件相关的参数配置、登录拦截
//注意：如果use()中的回调函数不使用next()，是不会自动连接到下一个中间件的执行，
//并且客户端一直处于等待状态，next()用于承上一个中间件启下下一个中间件，不可少
app.use(function(req,res,next){
  console.log('所有请求都会进入此拦截中间件...');
  next();
});

//配置handlbars的局部通用文件的数据定义,注意：必须放在路由注册之前，因为数据要先于模板文件加载
app.use(function(req,res,next){
  if(!res.locals.commons) res.locals.commons = {};
  res.locals.commons.header = {
    name:'头部',
    desc:'这是来自局部文件配置的数据..'
  };
  res.locals.commons.footer = {
    name:'底部',
    desc:'这是来自局部文件配置的数据..'
  };
  next();
});

//路由注册
app.use('/', index);
app.use('/users', users);
//app.use('浏览器(客户端)访问的第一级路径',路由配置模块)
app.use('/content',content);
app.use('/hand',handlebarsRouter);

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
  fs.appendFileSync(__dirname+'/error.log',err.status+'\n'+err.message+'\n'+err.stack+'\n');
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
