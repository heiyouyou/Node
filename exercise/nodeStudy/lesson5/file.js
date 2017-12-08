// 操作文件必须引入fs模块
var fs = require("fs");
// 对文件进行重命名
// fs.rename("study.txt","newFile.txt",function(err){
// 	if(err)console.log(err.message);
// 	console.log("重命名成功....");
// });

// 同步方法操作文件重命名，并且不支持回调函数的操作
// fs.renameSync("study1.txt","newFile.txt");

// 修改文件属性权限
// fs.chmod("newFile.txt","666",function(err){//666表示可读
// 	console.log("修改权限成功....");
// });

// 读取文件内容
// fs.readFile("newFile.txt",function(err,data){
// 	console.log(data);//Buffer类的实例
// 	console.log(Buffer.isBuffer(data));//true
// 	console.log(data.toString());//这是一个fs读取操作.....
// });

// 同步读取文件内容，返回值为读取到的内容Buffer实例
// console.time("timer");
// var data1 = fs.readFileSync("newFile.txt","utf-8");
// var data2 = fs.readFileSync("newFile.txt","utf-8");
// var data3 = fs.readFileSync("newFile.txt","utf-8");
// var data4 = fs.readFileSync("newFile.txt","utf-8");
// var data5 = fs.readFileSync("newFile.txt","utf-8");
// console.log(data1);
// console.timeEnd("timer");//打印同步操作的执行时间

// fs.writeFile("copy.txt","hello world！！！",function(err){
// 	console.log("文件写入成功...");
// });

// 同步写入内容到文件，无返回值（默认返回undefined）
// var val = fs.writeFileSync("copy.txt","this is my first copy text....");
// console.log(val);//undefined

// fs.write(fd, data[,position[,encoding]], callback)
// fs.write(fd,"世界真大，好想去看看",function(err,written,string){
// 	console.log(err);
// });
var filePath = "newFile.txt";
// 判断文件路径是否存在，存在flag为true，否则false
// fs.exists(filePath,function(flag){
// 	if(flag){
// 		var data = fs.readFileSync(filePath);
// 		fs.appendFileSync("copy.txt",data);//给指定文件追加内容
// 		console.log("文件写入成功....");
// 	}else{
// 		console.log("文件不存在...");
// 	}
// });

// 同步方法判断文件路径是否存在，存在则返回true，否则false
var flag = fs.existsSync(filePath);
// console.log(flag);//true
if(flag){
	var data = fs.readFileSync(filePath);
	fs.appendFileSync("copy.txt",data);//给指定文件追加内容
	console.log("文件写入成功....");
}else{
	console.log("文件不存在...");
}
