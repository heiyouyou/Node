// var a = "12";
// console.log("%s",a);//字符串格式化
// console.log("%d",a);//数值格式化
// console.log("%j",a);//Json格式化

// var arr = [24,243,2];
// // map()等同于forEach()，但是后者没有返回值
// var newArr = arr.map(function(item,index,arr){
// 	console.log(item);
// 	return item+1;
// });
// console.log(newArr);

var arr = [2.2,3.3,5.2];
// 箭头函数
// var newArr = arr.map((x) => { return parseInt(x)});
// 等同于一下
var newArr = arr.map((x) => (parseInt(x)));
console.log(newArr);