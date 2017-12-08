var fs = require("fs");
// 以【只读】的方式打开文件. 当文件不存在时产生异常.
// fs.open("newFile.txt","r",function(err,fd){// r:可读 w:可写 a:追加
// 	if(!err){
// 		//fd file desciption 文档标识符
// 		console.log(fd);//3
// 		console.log("一");
// 	};
// });
// fs.open("copy.txt","r",function(err,fd){// r:可读 w:可写 a:追加
// 	if(!err){
// 		//fd file desciption 文档标识符
// 		console.log(fd);//4
// 		console.log("二");
// 	};
// });
// fs.open("copy.txt","r",function(err,fd){// r:可读 w:可写 a:追加
// 	if(!err){
// 		//fd file desciption 文档标识符
// 		console.log(fd);//5
// 		console.log("三");
// 	};
// });

// 以同步只写方式打开文件，返回值为文件的描述符fd
// var fd1 = fs.openSync("newFile.txt","w");
// var fd2 = fs.openSync("newFile.txt","w");
// var fd3 = fs.openSync("newFile.txt","w");
// console.log(fd1);//3
// console.log(fd2);//4
// console.log(fd3);//5

// fs.read(fd, buffer, offset, length, position, callback)
// 从指定的文档标识符fd读取文件数据。 
// buffer 是缓冲区，数据将会写入这里。 
// offset 是开始向缓冲区 buffer 写入的偏移量。 
// length 是一个整形值，指定了读取的字节数。 
// position 是一个整形值，指定了从哪里开始读取文件，如果position为null，将会从文件当前的位置读取数据。 
// 回调函数给定了三个参数， (err,bytesRead,buffer)， 分别为错误，读取的字节和缓冲区。

// var fd = fs.openSync("newFile.txt","r");
// var buf = new Buffer(Buffer.byteLength(fs.readFileSync("newFile.txt")));
// fs.read(fd,buf,4,Buffer.byteLength(buf)-4,4,function(err,bytesRead,data){
// 	console.log(bytesRead);//36，读取到的字节数
// 	console.log(data);//Buffer类的实例
// 	console.log(data.toString());//这是一个文件系统。。。
// });

//打开文件进行读操作
fs.open("newFile.txt","r",function(err,fd){
	var buf = new Buffer(36);
	fs.read(fd,buf,0,36,0,function(err,len,data){
		// console.log(buf);
		// console.log(buf.toString());
		var buff = new Buffer("*************\n");
		var copyBuffer = Buffer.concat([buf,buff,buf]);
		var len = Buffer.byteLength(copyBuffer);
		// 打开文件进行写操作
		fs.open("testCopy.txt","w",function(err,fd){
			fs.write(fd,copyBuffer,0,len,0,function(err,writeLength,data){
				console.log("写入的字节数："+writeLength);
				console.log("写入成功。。。");
			});
		});
	});
});