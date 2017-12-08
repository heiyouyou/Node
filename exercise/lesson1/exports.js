exports.data = {
	username:"黑黝黝",
	age:22,
	comment:'自定义模块'
};
// 当有相同的方法或者属性名时，最后面的会将前面定义的覆盖掉
exports.hobby = '篮球';
module.exports.hobby = '兵兵球';
module.exports.username = {
	username:'嘿嘿呵'
}
console.log(module.exports);
// module.exports = {
// 	username:'嘿嘿呵'	
// }

// exports是module.exports的一个子类对象，只要在exports上定义扩展的属性和方法最终都会
// 与module.exports中的方法和属性进行合并以对象（实际就是module.exports对象）的形式输出