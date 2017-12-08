var fs = require("fs");
var data = "我是一个热爱研究技术的人....";
// 创建一个可以写入的流，写入到文件 output.txt 中
var writeStream = fs.createWriteStream("output.txt");
//// 使用 utf8 编码写入数据
writeStream.write(data,"utf-8");
// 标记文件末尾
writeStream.end();
writeStream.on("finish",function(){
	console.log("写入成功....");
});
writeStream.on("error",function(){
	console.log(err.stack);
});
console.log("程序执行完毕....");