
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , content = require('./routes/content')
  , http = require('http')
  , path = require('path');

var app = express();

//express的默认配置
app.configure(function(){
  //端口的设置
  app.set('port', process.env.PORT || 3000);
  //设置模板相对路径(相对当前目录)
  app.set('views', __dirname + '/views');
  //设置模板引擎
  app.set('view engine', 'jade');
  //图标的拦截，不处理
  app.use(express.favicon());
  //日记注册，在开发环境中这个代码打开,如果开发完毕要注释掉。
  app.use(express.logger('dev'));
  //post参数的解析
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //注册路由
  app.use(app.router);
  //静态资源路径的设置
  app.use(express.static(path.join(__dirname, 'public')));
});

//开发环境
app.configure('development', function(){
  app.use(express.errorHandler());
});

//路由注册，浏览器访问地址都属于get请求
//主页配置
app.get('/', routes.index);
app.get('/users', user.list);
//内容页配置
app.get('/content',content.content);
//测试页配置
app.get('/test',function(req,res){
  res.render('test');
});

//服务器创建与监听
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
