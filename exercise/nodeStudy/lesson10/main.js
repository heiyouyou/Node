var fs = require("fs");
var data = "";
// 创建可读流
var readerStream = fs.createReadStream("input.txt");
// 设置编码
readerStream.setEncoding("UTF-8");//不设置编码chunk为Buffer类的实例
// 处理流事件 --> data, end, and error
readerStream.on("data",function(chunk){
	data +=chunk;
	console.log(chunk);
	// console.log(chunk.toString());
});
readerStream.on("end",function(){
	console.log("end事件后的："+data);
});
readerStream.on("error",function(err){
	console.log(err.stack);
});
console.log("程序执行结束....");