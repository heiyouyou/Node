/**
 * Created by Administrator on 2017/1/10.
 */
var express = require('express');
var router = express.Router();

router.get('/demo1',function(req,res,next){
   // 通过属性layout:null可以不使用默认布局的结构
   res.render('handlebars/demo1',{layout:null,title:'没有使用到默认布局'});
});

router.get('/demo2',function(req,res,next){
    // 通过属性layout:app可以使用指定的布局结构
    res.render('handlebars/demo1',{layout:'app',title:'app页面'});
});

router.get('/demo3',function(req,res,next){
    res.render('handlebars/demo3',{
        layout:'pc',
        link:'https://www.mengkedu.com',
        lujing:400,
        address:'<span style="color:red;font-weight:600;">广东深圳</span>',
        teachers:['keke','kery','hehe'],
        students:[{name:'小明',age:22,sex:'男',salary:false},{name:'小神',age:23,sex:'男',salary:true},{name:'小红',age:21,sex:'女',salary:false}],
        data:{
            name:'handlebars的学习',
            time:'2017/01/01'
        }
    });
});

router.get('/demo4',function(req,res,next){
    res.render('handlebars/demo4');
});

router.get('/demo5',function(req,res,next){
    res.render('handlebars/demo5',{time:'2017/1/11 15:08:34',age:22});
});
module.exports = router;