var fs = require("fs");
var zlib = require("zlib");
// 解压文件
fs.createReadStream("input.txt.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("decompress.txt"));
console.log("解压完毕....");