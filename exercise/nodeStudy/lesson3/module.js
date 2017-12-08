// 自定义模块块

function sum(a,b){
	console.log(a+b);
};
function show(){
	console.log("自定义模块show方法导入了.....");
};
// 导出命令一：module.exports
// module.exports.sum = sum;
// module.exports.show = show;

// 导出命令二：exports
// exports.sum = sum;
// exports.show = show;
// console.log("exports...");
// //exports是做作为module.exports的指针指向
// console.log(exports == module.exports);//true

// 导出命令三：
module.exports = function(){
	console.log("无名函数导入.....");
}