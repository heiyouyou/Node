/**
 * Created by Administrator on 2017/1/8.
 */
var express = require('express');
//router作为express的一个子对象
var router = express.Router();
//内容添加页面
//router.get('浏览器(客户端)访问的第二、三..级路径',callback);
router.get('/wzy/add', function(req, res, next) {
    //res.render('页面模板的路径',json格式的数据)
    res.render('content/add',{data:'add'});//注意：res.render()、res.send()、res.json()等方法内部已经执行next()连接下个中间的作用
});
//内容删除页面
router.get('/wzy/delete', function(req, res, next) {
    res.render('content/delete',{data:'delete'});
});
//内容查询页面
router.get('/wzy/search', function(req, res, next) {
    //console.log(req.param);
    //req.param(name)获取指定name的参数值，但已经弃用，使用req.params、req.body、req.query代替
    console.log(req.param('username')+'====='+req.param('age'));

    res.render('content/search',{data:'search'});
});
//内容查询页面
router.get('/wzy/search1/:username/:age', function(req, res, next) {
    //console.log(req.param);
    //req.param(name)获取指定name的参数值，但已经弃用，使用req.params、req.body、req.query代替
    console.log(req.param('username')+'====='+req.param('age'));

    //req.params返回一个json对象，使用这种形式请求的地址必须是如：http://localhost:3000/content/wzy/search/heiyouyuo1(参数1)/22(参数2)...
    //console.log(req.params);
    console.log(req.params.username+'====='+req.params.age);

    res.render('content/search',{data:'search1'});
});
//内容查询页面
router.get('/wzy/search2', function(req, res, next) {
    //console.log(req.param);
    //req.param(name)获取指定name的参数值，但已经弃用，使用req.params、req.body、req.query代替
    console.log(req.param('username')+'====='+req.param('age'));//heiyouyuo1=====22

    //req.params返回一个json对象，使用这种形式请求的地址必须是如：http://localhost:3000/content/wzy/search/heiyouyuo1(参数1)/22(参数2)...
    //console.log(req.params);
    console.log(req.params.username+'====='+req.params.age);//undefined====undefined

    //req.query返回一个json对象，使用这种形式请求的地址必须是如：http://localhost:3000/content/wzy/search?username=heiyouyuo1&age=22
    console.log(req.query.username+'====='+req.query.age);//heiyouyuo1=====22

    res.render('content/search',{data:'search2'});
});

//登录界面
router.get('/wzy/login',function(req,res,next){
    res.render('content/login');
});
//表单数据登录get提交
router.get('/wzy/params',function(req,res,next){
    console.log("用户名："+req.query.username);
    console.log("密码："+req.query.password);
    //req.body()只能用来处理post请求的参数
    console.log("用户名："+req.body.username);//undefined，只能用来处理post请求的参数
    console.log("密码："+req.body.password);//undefined
    res.render('content/add',{data:"用户名："+req.query.username+"密码："+req.query.password});
});
//表单数据登录post提交、ajax提交
router.post('/wzy/params',function(req,res,next){
    //req.query()、req.params()/req.query()只能用来处理get请求的参数
    //console.log("用户名："+req.query.username);//undefined
    //console.log("密码："+req.query.password);//undefined
    //console.log("用户名："+req.params.username);//undefined
    //console.log("密码："+req.params.password);//undefined

    //req.xhr判断请求是否是ajax请求，是返回true，否则返回false
    console.log(req.xhr);
    if(req.xhr){
        //req.body()返回一个json对象，用来处理post请求的参数，不能处理get请求参数
        //console.log(req.body);

        /*
         * req属于node http.incomingMessage的实例
            express只不过在node http.incomingMessage添加一些了功能，它拥有原生的req的所有的API方法和属性
            express中的req除了req.headers和req.url是来自nodejs原生的req，其他的都是通过express派生出来的.
         *
         * */
        console.log("用户名："+req.body.username);
        console.log("密码："+req.body.password);
        console.log("获取请求头headers："+JSON.stringify(req.headers));
        console.log("获取请求头connection："+JSON.stringify(req.headers.connection));
        console.log("获取请求头accept-encoding："+JSON.stringify(req.headers["accept-encoding"]));
        console.log("获取请求头cookies："+JSON.stringify(req.headers["cookies"]));
        console.log("获取当前的cookies："+JSON.stringify(req.cookies));
        //req.accepts()请求头接受的类型，接受符合的类型则返回接受的类型，否则返回false
        console.log("获取接收的类型："+req.accepts("appddd"));//false
        console.log("获取接收的类型："+req.accepts("text/html"));
        console.log("获取IP地址："+req.ip);
        console.log("获取请求的路径（是不包含：协议，主机，端口和查询字符串）："+req.path);
        console.log("获取主机名："+req.host);
        console.log("判断是否是异步(ajax)请求："+req.xhr);
        console.log("获取请求协议："+req.protocol);
        console.log("获取请求地址URL："+req.url);
        console.log("获取请求地址 originalUrl："+req.originalUrl);
        console.log("获取客户端的语言："+req.acceptsLanguage);

        res.send('success');//一般用来发送文本数据
        //res.send({msg:'success',code:200});//也可以用来发送json格式的数据，内部做了处理
        //res.json({msg:'success',code:200});
    }else{
        res.render('content/add',{data:"用户名："+req.body.username+"密码："+req.body.password});
    }
});

router.get('/wzy/params1',function(req,res,next){
    //关于 res里面常用方法
    //文本  对象， (图片，音频 下载)
    //res.status(code) 默认不写，就是200
    //设置响应出状态：res.status(200);
    //设置响应内容的类型：res.set("Content-type","text/html");//默认不写就是text/html
    //设置日期 res.set("Date","ddddd")
    //专门为Content-type提供:res.type("text/html")
    //重定向：res.redirect(相对访问地址的页面路径);res.redirect("https://www.mengkedu.com");
    //cookie设置：res.cookie(name,value,[options])
    //清除cookie:res.clearCookie(name,[options]);

    //返回数据的方式：就是对于nodejs原生态的res.end()的封装
    //res.send 发送送文本，json都可以发送。但是个人建议：如果发送json的话都使用res.json()
    //res.json({key:value,key1:value1.....});
    //res.attachment([filename],) res.download(path,[filename],callback);提供服务器文件下载
    //res.sendFile(path,[option],[callback]);图片和文件发送
    //res.locals:设置给应用程序级别的作用域,几乎用的很少。如果你的数据几乎不修改的时候可以考虑用它
    //res.render("view relative path",报文数据{key:value,key1:value1.....});
    //报文数据其实就是设置给页面渲染的模板数据，就是一个作用域=req级别的数据
    //作用域三个级别大小：locals > session(cookie)>req

    //设置状态码
    res.status(200);

    //设置模板数据
    res.locals.message = 'success';
    res.locals.title = 'content';
    //注意：不能采用这样的形式，初始化数据，会将前面定义的全部覆盖的
    //res.locals = {
    //    message:'heiyou',
    //    title:'c'
    //}

    //设置重定向页面，重定向不能将locals下绑定的数据传递过去
    //res.redirect('https://www.mengkedu.com');//可以重定向到外网地址
    //res.redirect('/');//重定向到index页面

    //模板数据渲染，可以将将locals下绑定的数据传递过去
    res.render('index');
})
module.exports = router;
