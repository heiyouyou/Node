var express = require('express');
var router = express.Router();
var encode = require('../core/encrypt');
/* GET users listing. */
router.get('/encode', function(req, res, next) {
  var password1 = '12345';
  var password2 = '12345';
  var password3 = '12345wzy';
  // 加密操作
  var encodeContent1 = encode.createHash(password1);
  var encodeContent2 = encode.createHmac(password2);
  var encodeContent3 = encode.cipher.encode(password3,"wzy");
  // 解密操作
  var decodeContent3 = encode.cipher.decode(encodeContent3,"wzy");

  console.log("1="+encodeContent1);
  console.log("2="+encodeContent2);
  console.log("3="+encodeContent3);
  console.log("4="+decodeContent3);
  res.send(encodeContent1+"=="+encodeContent2+"=="+encodeContent3);
});
// 高级路由配置
// 浏览器只能访问：/test+任意字符的网址，*表示任意多个
router.get('/test*/:num',function(req,res,next){
  var num = req.params.num;
  console.log(1+"==="+num);
  if(num>2){
    return next();//连接下一个回调函数执行
  };
  console.log(444);
  res.send('1');//阻止了下一个回调函数的执行
},function(req, res, next) {
  console.log(2);
  next();
},function(req, res, next) {
  console.log(3);
  res.send('3');
});
// 浏览器只能访问：/seconda、/secondb、/second，"?"表示0到1
router.get('/second(a|b)?/:num',function(req,res,next){
  var num = req.params.num;
  console.log(1+"==="+num);
  if(num>2){
    return next();//连接下一个回调函数执行
  };
  console.log(444);
  res.send('1');//阻止了下一个回调函数的执行
},function(req, res, next) {
  console.log(2);
  next();
},function(req, res, next) {
  console.log(3);
  res.send('3');
});
// 浏览器只能访问：/thirda、thirdb、thirdaabb，"+"表示一个或者多个
router.get('/third(a|b)+/:num',function(req,res,next){
  var num = req.params.num;
  console.log(1+"==="+num);
  if(num>2){
    return next();//连接下一个回调函数执行
  };
  console.log(444);
  res.send('1');//阻止了下一个回调函数的执行
},function(req, res, next) {
  console.log(2);
  next();
},function(req, res, next) {
  console.log(3);
  res.send('3');
});
module.exports = router;
