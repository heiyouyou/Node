// 载入http模块
var http = require("http");
var querystring = require("querystring");
// 定义域名和端口号为常量
const HOST = "localhost",PORT = 80;
// 创建服务器
var server = http.createServer(function(req,res){
	// 获取携带参数的url部分地址
	var url = req.url.split("?")[0];
	// 获取携带的参数
	var params = req.url.split("?")[1];
	// console.log(url+"===="+params);
	// console.log(url);//浏览器（客户端）地址栏/后面的字符串（包括/），如果没有则为/
	// 判断网页标题是否用了默认图标（/favicon.ico）
	if(url != "/favicon.ico"){//只进行一次判断
		if(url == "/"){
			// 设置响头的状态码，和内容类型，防止浏览器请求不终止
			res.writeHead(200,{"Content-Type":"text/html"});
			// 返回数据给客户端
			res.write("Hello World");
			// res在响应完了以后一定要关闭连接
			res.end();
		}else if(url == "/index"){
			// console.log(req.headers);//获取响应头的信息
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write("<meta charset='utf-8'>");
			params = querystring.parse(params);//变成了一个json对象
			console.log("querystring之后的params："+params);
			res.write("this is index page <span style='color:red;font-weight:bold;'>"+params.username+"</span>");
			res.write("<br/><a href='/user'>跳转到user page</a>");
			res.end();
		}else if(url == "/user"){
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write("<meta charset='utf-8'>");
			res.write("this is a user page");
			res.end();
		}else if(url == "/client"){
			// 监听客户端发来的数据
			req.on("data",function(data){//data为Buffer类型的实例
				console.log(data.toString());
				res.end("I got it...");
			});
		};
	}else{
		res.writeHead(404,{"Content-Type":"text/html"});
		res.end();
	}
});

// 监听服务器的报错
server.on("error",function(err){
	console.log(err.message);
});
// 监听服务器的关闭
server.on("close",function(err){
	console.log("断开了连接");
});
// 监听80端口
server.listen(PORT,HOST,function(err){
	if(err){
		console.log(err.message);
	}else{
		console.log("listen on localhost port 80");
	}
});