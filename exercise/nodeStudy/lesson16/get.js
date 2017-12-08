var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/index.html',function(req,res){
	console.log(__dirname);
	res.sendFile(__dirname+"/"+"index.html");
});
app.get('/process_get',function(req,res){
	response = {
		username:req.query.username,
		password:req.query.password
	};
	res.send(response);//可以这样子
	res.send(JSON.stringify(response));
});
var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});