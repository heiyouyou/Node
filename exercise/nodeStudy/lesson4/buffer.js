// 方法一：创建Buffer的实例
var buf = new Buffer("hello world");//返回一个16进制的数
// console.log(buf);//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
// console.log(buf.toString());//hello world
// console.log(Object.prototype.toString.call(buf));//[object Unit8Array]
// console.log(Buffer.prototype);
// console.log(Buffer.prototype.__proto__);//Uint8Array{}
// console.log(Uint8Array.prototype.__proto__);//{}

var buf1 = new Buffer("你","utf-8");//默认编码是utf-8
// console.log(buf1);//e4 bd a0
// //类的方法isBuffer()判断一个对象是否是Buffer类的实例
// console.log(Buffer.isBuffer(buf1));//true
// var str = new String("你");
// console.log(Buffer.isBuffer(str));//false

//方法二：字节数
var buf2 = new Buffer(3);//传入字节数
// buf2.fill(23);//十进制填充值
// console.log(buf2);// 17 17 17，无论是什么进制的数，输出都是16进制
// buf2.fill(0xab);//十六进制填充值
// console.log(buf2);// ab ab ab
// buf2.fill(077);//八进制填充值
// console.log(buf2);//3f 3f 3f
// console.log(buf2.toString());//? ? ?toString()默认转成10进制

// 方法三：字节数组
// var buf3 = new Buffer(["dsf",23,34]);
// console.log(buf3);//00 17 22
// console.log(buf3.toString());//特殊字符
// var buf4 = new Buffer([12,13,31]);
// console.log(buf4);//0c 0d 1f
// console.log(buf4.toString());
var buf3 = new Buffer([0x6e,11,12,13,14]);
console.log(buf3);//6e 0b 0c 0d 0e
console.log(buf3[0]);//110
console.log(buf3[0].toString());//110
console.log(buf3[0].toString(16));//6e
// byteLength()获取Buffer类的字节长度
console.log(Buffer.byteLength(buf3));//5
