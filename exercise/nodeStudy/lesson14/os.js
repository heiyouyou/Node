var os = require("os");
console.log("操作系统临时文件："+os.tmpdir());
console.log("CPU的字节序："+os.endianness());
console.log("操作系统的主机名："+os.hostname());
console.log("操作系统名："+os.type());
// 系统内存总量
console.log('total memory : '+ os.totalmem()+" bytes.");
// 操作系统名
console.log('platform : '+os.platform());
// 操作系统空闲内存量
console.log('free memory : '+os.freemem()+" bytes.");