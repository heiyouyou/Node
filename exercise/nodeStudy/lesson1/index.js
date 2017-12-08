// var a = 1;
// function test(){
// 	console.log(a);
// };
// test();

var user = {
	name:"heiyouyou",
	age:22,
	introduce:function(){
		console.log(this.name+"===="+this.age);
	}
};

//箭头函数
var fn = (x,y) => {
	console.log(x);
	return x + y;
};
fn(1,2);
console.log(fn(1,2));
