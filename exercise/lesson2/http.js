/**
 * Created by Administrator on 2016/12/30.
 */
var http = require('http');
var pageUrl1 = 'http://www.xunlei.com/';
var pageUrl2 = 'http://www.baidu.com/';
var write = require('./writefile');
http.get(pageUrl2,function(res){
    var html = '';
    var match = /^((ht|f)tp?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
    //监听响应头数据传输
    res.on('data',function(data){
        html +=data.toString('utf-8');
    });
    //监听响应头数据响应结束
    res.on('end',function(){
        write.writeFile('www.txt',html).then(function(){
            console.log('写入成功');
        }).catch(function(err){
            console.log('写入失败');
            console.log(err);
        });
    })
})