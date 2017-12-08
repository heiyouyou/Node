/**
 * Created by Administrator on 2017/1/7.
 */
var http = require("http");
//载入mime模块来解析mime类型
var mime = require("mime");
var fs = require("fs");
var path = require("path");

//同步读取配置文件
var httpJsonString = fs.readFileSync(__dirname+"/config/http.json","utf-8");
//字符串转成对象
var httpJson = JSON.parse(httpJsonString);

http.createServer(function(req,res){
    //静态文件路径的处理，只获取小写形式的路径，不包含参数，如：/index.html
    var pathname = req.url.replace(/\/?(?:\?.*)?$/,"").toLowerCase();
    console.log("pathname:"+pathname);
    getResourceData(res,pathname);
}).listen(httpJson.port,httpJson.host,function(err){
    if(err){
        throw err;
    };
    console.log("监听端口："+httpJson.port+"的浏览器访问地址："+httpJson.host+":"+httpJson.port);
    console.log("如果需要退出，请按ctrl+c...");
});
//读取静态资源文件
function getResourceData(res,pathname,statusCode){
    //如果不传状态码，默认就是200
    if(!statusCode)statusCode = 200;
    //根据文件名+扩展名获取MIME类型，默认返回:application/octet-stream
    var mimeType = mime.lookup(pathname);
    //根据MIME类型获取扩展名
    var exType = mime.extension(mimeType);
    console.log(mimeType+"==="+exType);
    //判断是否是静态资源文件
    if(mimeType!="text/html"){
        pathname = "/public"+pathname;
    }else{
        pathname = "/views"+pathname;
    };
    fs.readFile(__dirname+pathname,function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/plain"});
            res.end("404 -- Not Found Resources...");
        }else{
            res.writeHead(statusCode,{"Content-Type":mimeType});
            res.end(data);
            if(mimeType!="text/html"){
                console.log("静态资源文件缓存处理逻辑代码....");
            };
        }
    });
}