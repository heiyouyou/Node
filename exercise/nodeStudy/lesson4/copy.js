var buf = new Buffer("hello");
var len = Buffer.byteLength(buf);
// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// targetBuffer - 要拷贝的 Buffer 对象。
// targetStart - 数字, 可选, 默认: 0
// sourceStart - 数字, 可选, 默认: 0
// sourceEnd - 数字, 可选, 默认: buffer.length

// var buf2 = new Buffer(len);
// buf.copy(buf2,0,0,len);
// console.log(buf2);//68 65 6c 6c 6f
// console.log(buf2.toString());//hello

var buf3 = new Buffer(2*len);
// Buffer.concat(list[, totalLength])
// list - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。
buf3 = Buffer.concat([buf,buf],10);
console.log(buf3);
console.log(buf3.toString());//hellohello
console.log("slice.....")
//buf.slice([start[, end]])
// start - 数字, 可选, 默认: 0
// end - 数字, 可选, 默认: buffer.length
// var buf4 = buf.slice(0);
var buf4 = buf.slice(0,4);
console.log(buf4);
console.log(buf4.toString());//hell