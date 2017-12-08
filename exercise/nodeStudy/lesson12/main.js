// console.log(__filename);
// console.log(__dirname);

// function printHello(){
//    console.log( "Hello, World!");
// }
// // 两秒后执行以上函数
// var timer = setTimeout(printHello, 2000);
// console.log(timer);
// clearTimeout(timer);//清除定时器

// function printHello(){
//    console.log( "Hello, World!");
// }
// // 两秒后执行以上函数
// setInterval(printHello, 2000);

// console.log('Hello world'); 
// console.log('byvoid%diovyb');
// //%d表示第二、三、.....等的参数 
// console.log('byvoid%diovyb', 1991,23423); 
// console.log('byvoid%d%diovyb', 1991,23423); 

// console.error('Hello world'); 
// console.error('byvoid%diovyb');
// //%d表示第二、三、.....等的参数 
// console.error('byvoid%diovyb', 1991,23423); 
// console.error('byvoid%d%diovyb', 1991,23423); 

// console.trace();

// console.log("程序开始执行：");
// var counter = 10;
// console.log("计数：%d",counter);
// //变量参数一致要与timeEnd()的变量参数一致
// console.time("获取数据");
// for(var i=0;i<10;i++){
// 	console.log(i);
// };
// console.timeEnd("获取数据");
// console.info("程序执行完毕");

// process.on("exit",function(code){
// 	setTimeout(function(){
// 		console.log("该代码不会执行");
// 	},0);
// 	console.log("退出码："+code);
// });
// console.log("程序执行完毕");

// //输出终端
// process.stdout.write("Hello World!"+"\n");
// process.stderr.write("Hello World!"+"\n");

// //通过参数读取
// process.argv.forEach(function(val,index,array){
// 	console.log(index+":"+val);
// });
// //获取执行路局
// console.log(process.execPath);
// //平台信息
// console.log(process.platform);
// // node的版本
// console.log(process.version);

// 输出当前目录
console.log("当前目录："+process.cwd());
// 输出当前版本
console.log("当前版本："+process.version);
// 输出内存使用情况
console.log(process.memoryUsage());