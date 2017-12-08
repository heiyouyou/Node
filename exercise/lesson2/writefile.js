var fs = require('fs');
exports.writeFile = function(filname,data){
    return new Promise(function(resolve,reject){
        fs.writeFile(__dirname+'/'+filname,data,function(err){
            if(err){
                reject(err);
                return;
            };
            resolve();
        })
    });
}