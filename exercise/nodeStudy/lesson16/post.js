var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//处理静态文件
app.use(express.static('public'));

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodeParser = bodyParser.urlencoded({extend:false});

// 处理get请求的地址
app.get('/index.html',function(req,res){
	res.sendFile(__dirname+"/"+"index.html");
});

//处理post请求的地址
app.post('/process_post',urlencodeParser,function(req,res){
	response = {
		//post请求不能用req.query.*这种写法
		username:req.body.username,
		password:req.body.password
	};
	console.log(response);
	// 响应数据给客户端
	res.end(JSON.stringify(response));
	//或者
	// res.send(JSON.stringify(response));
});

// 监听8081端口
var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

