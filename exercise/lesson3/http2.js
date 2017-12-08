/**
 * Created by Administrator on 2017/1/2.
 */

//引入http模块目的：就是为了去搭建一个web服务器
var http = require('http');
var port = 3000;
var host = "127.0.0.1";//或者localhost

//创建一个web服务器，createServer返回一个server类实例
http.createServer(function(req,res){
    //排除客户端请求标题标签的图标
    if(req.url !='/favicon.ico'){
        console.log(req.headers);//客户端请求头的信息，json对象
        console.log(req.originalUrl);//
        console.log(req.url);//请求的路径地址
        //初始化响应头的一些基本信息，告诉浏览器（客户端）如何解析渲染返回的数据
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        //响应返回的数据，可以用end()，也可以用write();，注意返回的数据只能是字符串或者Buffer
        //注意如果使用write()返回数据，必须用end()方法进行结束响应，否则客户端一直处于响应中状态
        //所以一般使用end()返回数据
        res.end("<!DOCTYPE html>"+
            "<html lang='en'>"+
            "<head>"+
            "    <meta charset='UTF-8'>"+
            "    <title>Title</title>"+
            "</head>"+
            "<body>"+
            "    <form action='/xxxx'>"+
            "        <p>用户名：<input type='text'></p>"+
            "        <p>密码：<input type='text'></p>"+
            "        <p><input type='button' value='登录'></p>"+
            "    </form>"+
            "</body>"+
            "</html>");

        //res.write("<!DOCTYPE html>"+
        //    "<html lang='en'>"+
        //    "<head>"+
        //    "    <meta charset='UTF-8'>"+
        //    "    <title>Title</title>"+
        //    "</head>"+
        //    "<body>"+
        //    "    <form action='/xxxx'>"+
        //    "        <p>用户名：<input type='text'></p>"+
        //    "        <p>密码：<input type='text'></p>"+
        //    "        <p><input type='button' value='登录'></p>"+
        //    "    </form>"+
        //    "</body>"+
        //    "</html>");
        //res.end();
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end();
    }
}).listen(port,host,function(err){
    if(err){
        console.log(err);
        return;
    };
    console.log("监听"+port+"端口成功...");
});
