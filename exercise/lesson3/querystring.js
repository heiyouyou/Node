/**
 * Created by Administrator on 2017/1/2.
 */


//querystirng:只为参数的获取和转换，和参数的加密和解密提供
//var parttern = "usernane=keke&password=123456&num=1";
//var json = querystring.parse(pattern);//{username:"keke",password:"123456",num:1}
//var pattern = querystring.stringify({username:"keke",password:"123456",num:1});//usernane=keke&password=123456&num=1
//这个方法和jquery中一样的 $.param({username:"keke",password:"123456",num:1});////usernane=keke&password=123456&num=1
//刚好 var urlJSON = url.parse(request.url);urlJSON.query这个属性就是参数列表形态。
// 所以querystring.parse(urlJSON.query)形成一个对象

//引入http模块目的：就是为了去搭建一个web服务器
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var port = 3001;
var host = "127.0.0.1";//或者localhost
//当前文件的根目录
var root = __dirname;

//创建一个web服务器，createServer返回一个server类实例
http.createServer(function(req,res){
    console.log(req.url);
    if(req.url !='/favicon.ico'){
        //转换url地址的组成部分
        var urljson = url.parse(req.url)
        //获取查询参数
        var paramstring = urljson.query;
        //使用querystring处理参数列表
        var queryjson = querystring.parse(paramstring);
        console.log(queryjson);//{ username: 'heiyouyou', age: '22', sex: '男}
        console.log("============");
        //var querystr = querystring.stringify(queryjson);
        //编码处理
        var querystr = querystring.stringify(queryjson,null,null,{encodeURIComponent:'gbkEncodeURIComponent'});
        //注意:中文默认会进行编码处理
        console.log(querystr);// username=heiyouyou&age=22&sex=%E7%94%B7
        //解码中文
        //console.log(decodeURIComponent(querystr));// username=heiyouyou&age=22&sex=男
        //console.log(decodeURI(querystr));// username=heiyouyou&age=22&sex=男


        var paramstr = querystring.parse('foo=bar&baz=qux&baz=quux&corge');
        console.log(paramstr); //{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }
        // Suppose gbkDecodeURIComponent function already exists,
        // it can decode `gbk` encoding string
        var paramstr1 = querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,{decodeURIComponent:'gbkDecodeURIComponent'});
        console.log(paramstr1);//{ w: '中文', foo: 'bar' }



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
