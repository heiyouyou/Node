//写入数据到缓冲区
// var buf = new Buffer(16);
// var byteleng = buf.write("www.heiyouyou.com");
// console.log("写入的字节数："+byteleng);//读取到的字节数：16
// console.log(buf.toString());//www.heiyouyou.co

//读取缓冲区数据
// var buf = new Buffer(26);
// for(var i=0;i<26;i++){
// 	buf[i] = i+97;
// };
// console.log(buf.toString("ascii"));//abcdefghijklmnopqrstuvwxyz
// console.log(buf.toString("ascii",0,5));//abcde
// console.log(buf.toString("utf-8",0,5));//abcde
// console.log(buf.toString(undefined,0,5));//abcde

//将Buffer类实例转成json对象
// var buf = new Buffer("www.heiyouyou.com");
// var json = buf.toJSON();
// console.log(buf);
// console.log(json);

//多个缓冲区对象合并
// var buf = new Buffer("abcd");
// var buf1 = new Buffer("efgh");
// var buf3 = Buffer.concat([buf,buf1],8);
// console.log(buf3);
// console.log(buf3.toString());

//缓冲区比较
// var buf1 = new Buffer("ABC");
// var buf2 = new Buffer("ABCD");
// var result = buf1.compare(buf2);
// console.log(result);//-1
// if(result < 0){
// 	console.log(buf1+"在"+buf2+"之前");
// }else if(result > 0){
// 	console.log(buf1+"在"+buf2+"之后");
// }else{
// 	console.log(buf1+"与"+buf2+"相同");
// };

//拷贝缓冲区
// var buf1 = new Buffer("ABC");
// var buf2 = new Buffer(3);
// buf1.copy(buf2,0,1,3);
// console.log(buf2);
// console.log(buf2.toString());

//缓冲区裁剪
var buf = new Buffer("ABCD");
var buf1 = buf.slice(1,3);//含头不含尾
console.log(buf1.toString());//BC

