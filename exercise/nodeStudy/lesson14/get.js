var http = require("http");
var url = require("url");
var util = require("util");
var querystring = require("querystring");
// http.createServer(function(req,res){
// 	res.writeHead(200,{"Content-Type":"text/plain"});
// 	console.log(url.parse(req.url,true));//将请求头的信息转成一个json对象
// 	res.end(util.inspect(url.parse(req.url,true)));
// }).listen(80);
http.createServer(function(req,res){
	//定义了一个post变量，用于暂存请求体的信息
	var post = "";
	req.on("data",function(chunk){
		//通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
		post += chunk;
	});
	//在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
	req.on("end",function(){
		post = querystring.parse(post);//只将请求的参数转成对象
		res.end(util.inspect(post));
	})
}).listen(80);