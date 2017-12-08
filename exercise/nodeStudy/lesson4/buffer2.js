var buf = new Buffer(3);
// buf.write("你");
// console.log(buf);//e4 bd a0

// writeUInt8(进制数,写入的位置索引)，只能一次写一个字节，写入字节码
// buf.writeUInt8(0xe4,0);
// buf.writeUInt8(0xbd,1);
// buf.writeUInt8(0xa0,2);
// console.log(buf);//e4 bd a0
// console.log(buf.toString());//你

// writeUInt16BE()一次顺序写入两个字节
// buf.writeUInt16BE(0xe4bd,0);
// buf.writeUInt8(0xa0,2);
// console.log(buf);//e4 bd a0
// console.log(buf.toString());//你

// 一次倒序写入两个字节
// buf.writeUInt16LE(0xe4bd,0);
// buf.writeUInt8(0xa0,2);
// console.log(buf);//bd e4 a0
// console.log(buf.toString());//空白

// var buf2 = new Buffer(4);
// buf2.writeUInt16LE(0x1a1b,0);
// buf2.writeUInt16LE(0x1c1d,2);
// console.log(buf2);//1b 1a 1d 1c
// console.log(buf2.toString());

var buf3 = new Buffer(8);
buf3.writeUInt32BE(0xe4bda0e5,0);
buf3.writeUInt32BE(0xa5bd0000,4);
console.log(buf3);//e4 bd a0 e5 a5 bd 00 00
console.log(buf3.toString());//你好
console.log("读取操作....");
// 一次读一个字节
// console.log(buf3.readUInt8(0));//默认转成10进制
// console.log(buf3.readUInt8(2));
// console.log(buf3.readUInt8(3));
// console.log(buf3.readUInt8(4));
// console.log(buf3.readUInt8(5));
// console.log(buf3.readUInt8(0).toString(16));//转成16进制
// console.log(buf3.readUInt8(1).toString(16));
// console.log(buf3.readUInt8(2).toString(16));
// console.log(buf3.readUInt8(3).toString(16));
// console.log(buf3.readUInt8(4).toString(16));
// console.log(buf3.readUInt8(5).toString(16));
// 一次读两个字节
// console.log(buf3.readUInt16BE(0));//默认转成10进制
// console.log(buf3.readUInt16BE(2));
// console.log(buf3.readUInt16BE(4));
// console.log(buf3.readUInt16BE(0).toString(16));//转成16进制
// console.log(buf3.readUInt16BE(2).toString(16));
// console.log(buf3.readUInt16BE(4).toString(16));

// 一次读四个字节
console.log(buf3.readUInt32BE(0));//默认转成10进制
console.log(buf3.readUInt16BE(4));
console.log(buf3.readUInt32BE(0).toString(16));//转成16进制
console.log(buf3.readUInt16BE(4).toString(16));