// 载入文件读取流组件
var fs = require("fs");
// 创建读取文件流对象
var readStream = fs.createReadStream("readFile.txt");
// 创建写入文件流对象
var writeStream = fs.createWriteStream("writeFile.txt");
// 写入内容到指定文件，该方法会将指定文件内的内容覆盖掉
// fs.appendFile("writeFile.txt","hello world!!!",function(err){
// 	console.log(err);//null
// 	console.log("写入成功....");
// });

// fs.open("writeFile.txt","r",function(err,fd){
// 	console.log(fd);
// });

// 监听读取文件数据事件
readStream.on("data",function(chunk){
	console.log(chunk);//Buffer实例
	console.log(chunk.toString());//你好呀！！！这是一个美丽的世界！！！
	var len = chunk.length;
	for(var i=0;i<len;i++){
		console.log(chunk[i]);//默认转成了10进制
		if(chunk[i].toString(16) == 21){
			chunk[i] = 0x3f;//以?的十六进制替代!的十六进制
		};
	}
});
// 使用管道写入指定文件
readStream.pipe(writeStream);
console.log(new Buffer("!"));//21
console.log(new Buffer("?"));//3f