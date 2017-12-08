var http = require("http");
var path = require("path");
var querystring = require("querystring");
var fs = require("fs");
const HOST = "localhost",PORT = 80;
var server = http.createServer(function(req,res){
	var url = req.url.split("?")[0];
	var params = req.url.split("?")[1];
	if(url != "/favicon.ico"){
		if(url == "/"){
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write("<meta charset='utf-8'>");
			res.write("<a href='/index'>返回首页</a>");
			res.end();
		}else if(url == "/index"){
			res.writeHead(200,{"Content-Type":"text/html"});
			// 这样使用绝对路径访问图片，是无法访问得到的
			// res.write("<img src='F:/NodeJS/nodeStudy/lesson6/myWeb/public/img/index.png'/>");
			// console.log(__dirname);//__dirname获取到项目的绝对路径

			// path.join([path1], [path2], [...])//组合参数中的所有路径，返回规范化后的路径。
			// 使用文件读取读取指定路径的内容
			// fs.readFile(path.join(__dirname,"view",url+".html"),function(err,data){
			// 	res.write(data.toString());
			// 	res.end();//响应结束的方法要放在里面，因为方法属于异步非阻塞的
			// });
			//可以采用创建读取流的方法读取指定路径的文件，进行在服务端访问 
			fs.createReadStream(path.join(__dirname,"view",url+".html")).pipe(res);
		}else if(url == "/img/index.png"){//设置图片路由（路径）
			fs.createReadStream(path.join(__dirname,"public",url)).pipe(res);
		}else if(url == "/css/main.css"){
			res.writeHead(200,{"Content-Type":"text/css"});
			fs.createReadStream(path.join(__dirname,"public",url)).pipe(res);
		}else if(url == "/js/jquery.js"){
			res.writeHead(200,{"Content-Type":"text/javascript"});
			fs.createReadStream(path.join(__dirname,"public",url)).pipe(res);
		}else if(url == "/data.json"){
			req.on("data",function(data){
				console.log(data);//Buffer实例
				console.log(data.toString());
				// querystring.parse()将字符串转成对象。说白了其实就是把url上带的参数串转成json对象
				console.log(querystring.parse(data.toString()));//变成了json对象
				console.log(JSON.stringify(querystring.parse(data.toString())));//变成了字符串的json格式
				// res.write()的参数必须是一个字符串
				res.write(JSON.stringify(querystring.parse(data.toString())));
				res.end();//res.end()与res.write成双出现的
			});
		}else if(url == "/contact.html"){
			res.writeHead(200,{"Content-Type":"text/html"});
			fs.createReadStream(path.join(__dirname,"view",url)).pipe(res);
		};
	}else{
		res.writeHead(404,{"Content-Type":"text/html"});
		res.end();
	};
});
server.listen(PORT,HOST,function(err){
	if(err){
		console.log(err.message);
	}else{
		console.log("监听80端口成功...")
	}
});