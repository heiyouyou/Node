var PORT = 3000;

var http = require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
//载入自定义的常用mime类型文件json对象
var mine=require('./mine').types;

var server = http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;
    //join合并路径
    var realPath = path.join(__dirname,pathname);
   	console.log(realPath);
    //获取 .扩展名(如：.html、.jpg...)
    var ext = path.extname(realPath);
    //截取除了.后面的字符串
    ext = ext ? ext.slice(1) : 'unknown';
    console.log(ext);
    //exists()判断路径是否存在，但是已弃用，已经用stat()或者access()方法替代
    fs.exists(realPath, function (exists) {
        //exists路径存在返回true,否则返回false
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            //以二进制编码进行读取文件，可以读取文本文件和图片文件
            fs.readFile(realPath, "binary", function (err,file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err.message);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file,"binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");