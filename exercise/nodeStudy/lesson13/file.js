var fs = require("fs");
// fs.readFile("input.txt",function(err,data){
// 	if(err){
// 		return console.error(err);
// 	}else{
// 		console.log(data);、、
// 		console.log("异步读取："+data.toString());
// 	}
// });
// var data = fs.readFileSync("input.txt");
// console.log("同步读取："+data);
// console.log("程序执行完毕");

// 异步打开文件
// console.log("准备打开文件....");
// // 以异步读写的形式打开文件
// fs.open("input.txt","r+",function(err,fd){
// 	if(err){
// 		return console.error(err);
// 	};
// 	console.log(fd);//文档标识符
// });
// console.log("打开文件成功....");

// fs.stat("input.txt",function(err,stats){
// 	if(err){
// 		return console.error(err);
// 	};
// 	console.log(stats);
// 	console.log("读取文件信息成功");
// 	console.log("是否为文件（isFile）"+stats.isFile());
// 	console.log("是否为目录（isFile）"+stats.isDirectory());
// 	console.log("是否为FIFO（isFIFO）"+stats.isFIFO());

// });

// console.log("准备写入文件.....");
// var buf = new Buffer("我是一个通过写入的文件内容！sfds");
// fs.writeFile("input1.txt",buf,function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("数据写入成功");
// 	console.log("读取文件的数据");
// 	fs.readFile("input1.txt",function(err,data){
// 		if(err){
// 			return console.error(err);
// 		};
// 		console.log("异步读取文件的数据为："+data.toString());
// 	});
// });

// var buf = new Buffer(1024);
// console.log("准备打开已存在的文件....");
// fs.open("input.txt","r+",function(err,fd){
// 	if(err){
// 		return console.error(err);
// 	};
// 	console.log(fd);
// 	console.log("文件打开成功");
// 	console.log("准备读取文件：");
// 	fs.read(fd,buf,0,buf.lenght,0,function(err,bytes){
// 		if(err){
// 			console.log(err);			
// 		};
// 		console.log(bytes+"字节被读取");
// 		if(bytes > 0){
// 			console.log(buf.slice(0,bytes).toString());
// 		}
// 	});
// });

// var buf = new Buffer(1024);
// console.log("准备打开已存在的文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//    console.log("截取10字节后的文件内容。");
//    fs.ftruncate(fd,5,function(err){//将截取到的内容重新写入指定fd的文件中
// 		if (err){
// 			console.log(err);
// 		};
// 		console.log("文件截取成功。");
// 	    console.log("准备读取文件：");
// 	   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
// 	      if (err){
// 	         console.log(err);
// 	      }
// 	      console.log(bytes + "  字节被读取");
	      
// 	      // 仅输出读取的字节
// 	      if(bytes > 0){
// 	         console.log(buf.slice(0, bytes).toString());
// 	      };
// 	       // 关闭文件
// 	      fs.close(fd, function(err){
// 	         if (err){
// 	            console.log(err);
// 	         } 
// 	         console.log("文件关闭成功");
// 	      });
// 	   });
//    })
// });

// console.log("准备删除文件！");
// fs.unlink('input.txt', function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件删除成功！");
// });

// console.log("创建目录");
// fs.mkdir("test/make/main.js",function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("目录创建成功。");
// });

// 移除test目录下的make目录
fs.rmdir("test/make",function(err){
	if (err) {
       return console.error(err);
   	};
   	console.log("读取目录");
	fs.readdir("test/",function(err,files){
		if (err) {
	       return console.error(err);
	   	};
	   	files.forEach(function(file){
	   		console.log(file);
	   	});
	});
});