/**
 * Created by Administrator on 2016/12/29.
 */
var fs = require('fs');
exports.writeFile = function(fileName,successFn,errorFn){
    fs.readFile(__dirname+'/'+fileName,'utf-8',function(err,data){
        if(err){
            errorFn(err);
            return;
        }
        successFn && successFn(data);
    });
}