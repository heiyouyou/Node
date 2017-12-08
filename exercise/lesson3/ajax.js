/**
 * Created by Administrator on 2017/1/2.
 */

//引入http模块目的：就是为了去搭建一个web服务器
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var port = 3000;
var host = "127.0.0.1";//或者localhost

//创建一个web服务器，createServer返回一个server类实例
http.createServer(function(req,res){
    //排除客户端请求标题标签的图标
    if(req.url !='/favicon.ico'){
        //配置响应头相关信息，可以防止跨域问题出现
        res.setHeader("Access-Control-Allow-Origin", "*");//必须的
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
        res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.setHeader("X-Powered-By",' 3.2.1');
        //res是响应，Content-Type的值可以决定end传输的数据告知浏览器以何种方式进行打开和渲染。
        res.setHeader("Content-Type", "application/json;charset=utf-8");

        //获取客户端发来的参数列表
        var params = url.parse(req.url).query;
        console.log("接受到的参数：");
        console.log(params);
        var paramsjson = querystring.parse(params);
        console.log("转换后的参数：");
        console.log(paramsjson);
        var json = {"username":paramsjson.username,"password":paramsjson.password,"age":paramsjson.age};

        //end 传递数据，二进制，文本，静态代码。
        //可以传递nodejs对象和javascript对象吗？====>不行
        //打印对象：First argument must be a string or Buffer
        res.end(JSON.stringify(json));
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
