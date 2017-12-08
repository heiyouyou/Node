/**
 * Created by Administrator on 2016/12/29.
 */
/*
* new Promise(function(resolve,reject){
*   业务逻辑代码.....
* })
* resovle作为then(successFn,errorFn)的执行成功回调函数,errorFn函数执行只会阻止当前成功函数里的逻辑代码执行，
* 不会阻止下面代码执行
* reject作为catch()的执行失败回调函数，catch()函数一执行就会阻止代码往下执行
* */
function show(time){
    var promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('开始打印'+time);
            resolve();
        },time*1000);
    });
    return promise;
};
function show(time){
    var promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('开始打印'+time);
            reject();
        },time*1000);
    });
    return promise;
};
//不是想要的形式，不需要回调函数执行
//show(1).then(function(){
//    show(2).then(function(){
//        show(3);
//    });
//},function(){
//    console.log('出现异常');
//});


//解决了多层回调函数的调用
//实际开发少用then()的错误回调函数
//show(1).then(function(){
//    return show(2);
//},function(){
//    console.log('执行异常....');
//}).then(function(){
//    return show(3);
//}).then(function(){
//    console.log('执行完毕....');
//})

show(1).then(function(){
   return show(2);
}).then(function(){
    return show(3);
}).then(function(){
    console.log('执行完毕....');
}).catch(function(){
    console.log('发生异常...');
});

