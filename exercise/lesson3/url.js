/**
 * Created by Administrator on 2017/1/2.
 */

//引入http模块目的：就是为了去搭建一个web服务器
var http = require('http');
///一般使用url模块，目的获取参数列表，解析IP地址，获取路径。
var url = require('url');
var port = 3000;
var host = "127.0.0.1";//或者localhost

//创建一个web服务器，createServer返回一个server类实例
http.createServer(function(req,res){
    //排除客户端请求标题标签的图标找不到的情况
    if(req.url !='/favicon.ico'){
        //一个url地址 = protocol(协议)+host(域名)+":"+port(端口)+req.url(相对路径)+"?"+querystring(参数列表)+"#"+hash(锚点);
        var href = "https://www.npmjs.com/package/cheerio?username=heiyouyu&age=22#222";
         //解析url,解析出来以后就可以拿到对象，这个对象就进行相关数据操作
        var json = url.parse(href);
        console.log("请求协议:"+json.protocol);
        console.log("域名+端口 :"+json.host);
        console.log("域名:"+json.hostname);
        console.log("端口:"+json.port);
        console.log("路径+参数:"+json.path);
        console.log("路径："+json.pathname);
        console.log("?+参数 :"+json.search);
        console.log("参数:"+json.query);
        console.log("hash锚点:"+json.hash);
        console.log("完整路径:"+json.href);
        /*
        *
            请求协议:https:
            域名+端口 :www.npmjs.com
            域名:www.npmjs.com
            端口:null
            路径+参数:/package/cheerio?username=heiyouyu&age=22
            路径：/package/cheerio
            ?+参数 :?username=heiyouyu&age=22
            参数:username=heiyouyu&age=22
            hash锚点:#222
            完整路径:https://www.npmjs.com/package/cheerio?username=heiyouyu&age=22#222
         *
        * */
        console.log("=============");
        //format(urlObj)获取解析的URL对象，并返回格式化的URL字符串。
        var urlString  = url.format(json);
        console.log(urlString);//"https://www.npmjs.com/package/cheerio?username=heiyouyu&age=22#222";
        console.log("==========");
        //url.resolve(from,to),将基础的地址from，变成from+to的格式地址，注意加/表示下级目录
        var url1 = url.resolve('/one/two/three', 'four')
        var url2 =  url.resolve('http://example.com/', '/one')
        var url3 =  url.resolve('http://example.com/one', '/two')
        console.log(url1);// '/one/two/four'
        console.log(url2);// 'http://example.com/one'
        console.log(url3);// 'http://example.com/two'
        //初始化响应头的一些基本信息，告诉浏览器（客户端）如何解析渲染返回的数据
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        //响应返回的数据，可以用end()，也可以用write();，注意返回的数据只能是字符串或者Buffer，
        //注意如果使用write()返回数据，必须用end()方法进行结束响应，否则客户端一直处于响应中状态
        //所以一般使用end()返回数据
        res.end();
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
