var express = require('express');
var router = express.Router();
// 引入test表对象模块
var Test = require('../dao/test');

//数据添加 
router.get('/add',function(req,res,next){
    new Test({
        username:"wzy",
        age:22,
        sex:"男"
    }).save(function(err,result){
        // console.log(result);
        res.send("添加用户成功...");
    });
});
//数据删除 
router.get('/remove',function(req,res,next){
    Test.remove({username:"wzy"},function(err){
        if(err) return handleError(err);
        res.send("删除成功...");
    });
});
//数据查找 
router.get('/search',function(req,res,next){
    Test.find({},function(err,result){
        if(err) return handleError(err);
        res.send(result);
    });
});
//数据修改地址 
router.post('/data/update',function(req,res,next){
    var username = req.body.username;
    var age = req.body.age;
    console.log(username+"===="+age);
    Test.update({username:'wzy'},req.body,{multi:true,upsert:true},function(err,result){
        if(err) return handleError(err);
        res.send("修改成功...");
    });
});
router.get('/update',function(req,res,next){
    res.render('update',{layout:null});
})
module.exports = router;