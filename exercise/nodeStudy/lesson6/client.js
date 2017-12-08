var http = require("http");
// 创建客户端 
var options = {
	hostname:"localhost",//路径
	port:80,//端口
	path:"/client",//路径
	method:"POST"//方法

}
var req = http.request(options,function(res){
	console.log(res.headers);
	// 监听服务端返回的数据
	res.on("data",function(data){
		console.log(data);//Buffer类的实例
		console.log(data.toString());
	});
});
// 发送给服务端的数据
req.write("Hello I am http client");
req.end();