var express = require('express');
var router = express.Router();
// 登录页面
router.get('/login', function(req, res, next) {
  res.render('pages/login',{layout:null});
});

// 登录的参数提交地址
router.post('/login/params', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var params = {username:username,password:password};
    console.log(username+"====="+password);
    // 将数据缓存在客户端浏览器上,cookie失效的时间单位是：毫秒,maxAge设置cookie缓存的最大过时时间
    // res.cookie('user',JSON.stringify(params),{maxAge:6000});
    // 默认不设置maxAge，就是session会话级别的存储，关闭浏览器即清除数据，注意要以字符串来存储
    res.cookie('user',JSON.stringify(params));
    // 重定向到商品页面
    res.redirect('/cookie/shop');
});

// 商品页面
router.get('/shop', function(req, res, next) {
    // 获取缓存的cookie
    var params = req.cookies.user;
    params = JSON.parse(req.cookies.user);
    res.render('pages/shop.html',{layout:null,username:params.username,password:params.password});
});

// 商品页面数据请求地址
router.get('/shop/params', function(req, res, next) {
    // 获取缓存的cookie，获取过来的是字符串对象
    var params = req.cookies.user;
    // 没有登录数据就进行登出操作
    if(!params){
        res.send('logout');
        console.log('参数...');
    }else{
        params = JSON.parse(req.cookies.user);
        res.json(params);
    };
});

// 登出操作，清除cookie，重定向到登录页面
router.get('/logout', function(req, res, next) {
    // 清除cookie
    res.clearCookie('user');
    // 重定向页面
    res.redirect('/cookie/login');
});

//将缓存中的数据提取出来进行作用域res.locals绑定
router.get('/',function(req,res,next){
    var data = req.cookies.user;
    console.log(data);
    // res.locals只对当前请求的页面有作用效果
    res.locals.user = JSON.parse(data);
    res.render('cookie');
});
module.exports = router;
