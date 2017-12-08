var net = require("net");
// 创建服务器
// 	net.createServer([options][, connectionListener])
// 创建一个 TCP 服务器。参数 connectionListener 自动给 'connection' 事件创建监听器。
var server = net.createServer(function(connection){
	console.log("client connected");
	// 响应内容给客户端
	connection.write("Hello world client.....");
	// 监听客户端是否断开了
	connection.on("end",function(){
		console.log("客户端关闭连接");
	});
	connection.pipe(connection);		
});
// 监听8080端口是否有链接
server.listen(8080,function(){
	console.log('sever is listening');
});