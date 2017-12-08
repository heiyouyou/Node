/**
 * Created by Administrator on 2016/12/29.
 */
var fs = require('fs');
var write = require('./fs');
write.writeFile('package.json',function(data){
    fs.writeFile(__dirname+'/test.txt',data,function(err){
        if(err){
            console.log(err);
        }
        console.log('写入成功');
        console.log("===================");
        write.writeFile('package22.json',function(data){
            console.log(data);
        },function(err){
            console.log(err);
        });
    });
},function(err){
    console.log(err);
});
