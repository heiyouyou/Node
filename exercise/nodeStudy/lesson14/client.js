var net = require('net');
var client = net.connect({port:8080},function(){
	console.log('连接到服务器！');
});
client.on('data',function(data){
	console.log(data.toString());
	setTimeout(function(){
		client.end();
	},2000);
});
client.on('end',function(){
	console.log('断开服务的连接');
});