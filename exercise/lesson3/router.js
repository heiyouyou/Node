/**
 * Created by Administrator on 2017/1/3.
 */
var fs = require('fs');
var http = require('http');
var url = require('url');

var protocal = 'http://';
var port = 3000;
var host = "127.0.0.1";
var root = __dirname;
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    if(pathname !='/favicon.ico'){
        router(pathname,res);
    }else{
        res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"});
        res.end();
    }
}).listen(port,host,function(err){
    if(err){
        throw err;
    };
    console.log("端口"+port+"监听成功...");
});
//路由配置
function router(pathname,res){
    switch(pathname){
        case '/':
            toIndex(res,"index.html");
            break;
        case '/index':
            toIndex(res,"index.html");
            break;
        case '/content':
            toContent(res,"content.html");
            break;
        default:
            toError(res,"error.html");
            break;
    }
};

//主页
function toIndex(res,pathname){
    readData(res,pathname);
}
//内容页
function toContent(res,pathname){
    readData(res,pathname);
}
//错误页
function toError(res,pathname){
    //readData(res,pathname);
    //或者如下：
    res.writeHead(404,{"Content-Type":"text/html"});
    fs.createReadStream("./"+pathname).pipe(res);
}

//读取文件数据
function readData(res,pathname){
    fs.readFile(root+"/"+pathname,"utf-8",function(err,data){
        if(err){
            console.log('读取文件失败！！！');
            return;
        };
        res.end(data);
    });
};