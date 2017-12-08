var express = require('express');
var router = express.Router();
// 登录页面
router.get('/login', function(req, res, next) {
  res.render('pages/login',{layout:null});
});

// 登录的参数提交地址,添加session
router.post('/login/params', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var params = {username:username,password:password};
    // 注意：session是绑定在req对象下的，以key-value的形式存储值
    req.session.user = JSON.stringify(params);
    // 重定向到商品页面
    res.redirect('/session/shop');
});

// 商品页面
router.get('/shop', function(req, res, next) {
    // 获取session
    var params = req.session.user;
    params = JSON.parse(req.session.user);
    res.render('pages/shop.html',{layout:null,username:params.username,password:params.password});
});

// 商品页面数据请求地址
router.get('/shop/params', function(req, res, next) {
    // 获取session，获取过来的是字符串对象
    var params = req.session.user;
    // 没有登录数据就进行登出操作
    if(!params){
        res.send('logout');
        console.log('参数...');
    }else{
        params = JSON.parse(req.session.user);
        res.json(params);
    };
});

// 登出操作，清除session，重定向到登录页面
router.get('/logout', function(req, res, next) {
    // req.session.user = {};//重新初始化,开发不要这样子做，不方便判断
    delete req.session.user;//内存全部回收 
    // 重定向页面
    res.redirect('/session/login');
});

//将缓存中的数据提取出来进行作用域res.locals绑定
router.get('/',function(req,res,next){
    var data = req.session.user;
    console.log("1==="+JSON.stringify(req.session));
    console.log("2==="+data);
    // res.locals只对当前请求的页面有作用效果
    res.locals.user = JSON.parse(data);
    res.render('cookie');
});
module.exports = router;
