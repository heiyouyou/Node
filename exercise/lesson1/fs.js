var fs = require('fs');
// console.log(fs);

/*__dirname获取当前工程的根目录,属于一个常量*/
var dir = __dirname;
// console.log(dir);//F:\NodeJS\NodeJS系统课程\练习\lesson1

// 异步读写文件
// fs.readFile(dir+'/test.js','utf-8',function (err, data) {
//   if(err) throw err;
//   // console.log(data);//如果不指定编码，则返回BUFFER的实例
//   fs.writeFile(dir+'/test1.js',data,function(err){
//   	if(err){
//   		console.log('failed');
//   	}else{
//   		console.log('success');
//   	}
//   })
// });

// 是readFile的同步读写版本方法，同样不声明编码，默认返回BUFFER实例
// var data = fs.readFileSync(dir+'/test.js');
var data = fs.readFileSync(dir+'/test.js','utf-8');
fs.writeFileSync(dir+'/test2.js',data);
// console.log(data);
console.log("success");