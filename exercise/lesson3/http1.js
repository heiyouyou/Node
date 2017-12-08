/**
 * Created by Administrator on 2017/1/2.
 */

//引入http模块目的：就是为了去搭建一个web服务器
var http = require('http');
var fs = require('fs');
var port = 3001;
var host = "127.0.0.1";//或者localhost
//当前文件的根目录
var root = __dirname;

//创建一个web服务器，createServer返回一个server类实例
http.createServer(function(req,res){
    //初始化响应头的一些基本信息，告诉浏览器（客户端）如何解析渲染返回的数据
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //响应返回的数据，可以用end()，也可以用write();，注意返回的数据只能是字符串或者Buffer
    //注意如果使用write()返回数据，必须用end()方法进行结束响应，否则客户端一直处于响应中状态
    //所以一般使用end()返回数据
    fs.readFile(root+'/index.html',function(err,data){
        if(err){
            console.log(err);
            return;
        };
        //可以不用在toString设置编码，因为上面已经进行设置了
        //res.end(data.toString('utf-8'));
        res.end(data);
    });
}).listen(port,host,function(err){
    if(err){
        console.log(err);
        return;
    };
    console.log("监听"+port+"端口成功...");
});
