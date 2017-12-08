var path = require("path");
// 格式化路径
//两个点表示上一级目录
console.log(path.normalize("/NodeJS/nodeStudy/lesson14/.."));
//一个点表示当前目录
console.log(path.normalize("/NodeJS/nodeStudy/lesson14/."));
// 多个路径合并
console.log(path.join("/test","test1",'2slashes/1slash','tab', '..'));
console.log(path.join("/test","test1",'2slashes/1slash','tab', '.'));
console.log(path.join("/test","test1",'2slashes/1slash','tab'));
// 转换为绝对路径 
console.log(path.resolve("os.js"));
console.log(path.relative("os.js","F:/NodeJS/nodeStudy/lesson14/"));
// 路径中文件的后缀名
console.log(path.extname("get.js"));

console.log(path.parse("/NodeJS/nodeStudy/lesson14"));
var pathObj = path.parse("/NodeJS/nodeStudy/lesson14");
console.log(path.format(pathObj));
console.log("posix："+path.posix);
console.log(path.win32);