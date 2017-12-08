/**
 * Created by Administrator on 2016/12/30.
 */
function show1(time){
    var pr = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(time+'秒后执行');
            //resolve(time);
            reject(time);
        },time*1000);
    });
    return pr;
};
function show2(time){
    var pr = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(time+'秒后执行');
            //resolve(time);
            reject(time);
        },time*1000);
    });
    return pr;
};
function show3(time){
    var pr = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(time+'秒后执行');
            var json = {username:'黑黝黝'};
            //resolve.call(json,[time]);
            resolve.(time);
            //reject(time);
        },time*1000);
    });
    return pr;
};
//show1(1).then(function(time){
//    console.log(time+'秒后执行成功');
//    return show2(2);//注意一定要返回promise的实例对象，才能够链式调用下去
//}).then(function(time){
//    console.log(time+'秒后执行成功');
//}).catch(function(){
//    console.log('执行失败');
//});

/*Promise类似于$.Deferred()，注意Promise中的resolve()和reject()函数使用call或者apply方法调整的this指向不是回调函数中的对象
 Promise.all([fn1,fn2,fn3,....])，只要有一个函数执行失败就是进入catch函数，如果全部执行成功，则进入then()的成功回调函数
 注意all()里面的函数都是并行异步执行的。类似于$.when(fn1,fn2,fn3,....)
* */
//Promise.all([show1(1),show2(2),show3(3)]).then(function(time){
//    console.log(Array.isArray(time));//true
//    console.log(time+'只有全部执行成功，才能进来');
//}).catch(function(time){
//    console.log(time+'只要有一个发生了异常，就会进来');
//});


/*Promise类似于$.Deferred()
* Promise.race([fn1,fn2,fn3,....])如果先遇到异常的代码就会执行catch()函数，否则先遇到成功执行的代码就会执行then()函数
* 同样race中的函数也是并行异步执行的。
* */
Promise.race([show1(3),show2(2),show3(1)]).then(function(time){
    console.log(time+'只要先遇到执行成功的代码，就进来');
    //console.log(this);//this不是指向回调函数中的call()或者apply()对象
}).catch(function(time){
    console.log(time+'有一个或者多个发生了异常');
});