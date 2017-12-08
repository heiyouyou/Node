var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/',function(req,res){
	res.send('Hello world,this is my first express webapp')
	// console.log(req.app);
	// console.log(req.params);
	// console.log(req.get);
	// console.log(req.hostname);
	// console.log("--------------");
	// console.log(res.app);
	// console.log(res.json);
	// console.log(res.status);
	// console.log(res.type);
});

app.post('/',function(req,res){
	console.log("主页 POST 请求");
   	res.send('Hello POST');
});

app.get('/deluser',function(req,res){
	console.log("/del_user 响应 DELETE 请求");
   	res.send('<span style="color:red;">删除页面</span>');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log(server.address());//{ address: '::', family: 'IPv6', port: 8081 }
	console.log("应用实例，访问地址为 http://%s:%s", host, port)//应用实例，访问地址为 http://:::8081

})