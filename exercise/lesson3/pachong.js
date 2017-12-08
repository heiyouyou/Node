/**
 * Created by Administrator on 2017/1/2.
 */
// 载入http模块，通过http的get和request就请求外网服务器的数据。
var http = require('http');
//类似于jQuery，需要npm install cheerion --dev-save
var cheerio = require('cheerio');
//载入自定义写入文件模块
var file = require('./file');
//爬虫的外网地址
var url = 'http://www.luoo.net/';

http.get(url,function(response){
    var html = '';
    ///on("data")是代表请求数据进行中，如果执行完毕，就会来触发on("end")的事件，如果发生错误，则触发on('error')事件
    response.on('data',function(data){
       // 注意：默认data是读取一部分返回的数据字节Buffer对象
       html +=data.toString('utf-8');//设置编码，原文格式显示
    }).on('end',function(){
        parseHtml(html);
    }).on('error',function(){
        console.log('地址'+url+'请求数据出错！！！');
    });
});

function parseHtml(html){
    //cheerio.load()返回一个类似于jQuery的对象
    var $ = cheerio.load(html,{decodeEntities:false});
    //注意：如果不设置{decodeEntities:false}，后面用html()获取文本和标签格式的内容时，会出现16进制的编码文本
    //var $ = cheerio.load(html);
    //获取网页title标签的文本
    //var title = $('title').text();
    var title = $('title').html();
    console.log(title);//落网 - 独立音乐推荐
    //获取页面所有img图片，返回的是一个json数组
    var $imgs = $("img");
    //获取每张图片的src值
    for(var i=0,len=$imgs.length;i<len;i++){
        //注意：$imgs[i]变成了一个原生的js对象，故需要再次用$()变成jQuery对象
        var imgSrc = $($imgs[i]).attr('src');
        //只下载jpg类型的图片
        if(imgSrc.indexOf('img-cdn')!=-1){
            downloadImg(imgSrc,'F:/NodeJS/NodeJS系统课程/NodeJS练习/lesson3/img/'+i+'.jpg');
        }
    }
};
//下载图片,url:图片地址，filname:图片名字
function downloadImg(url,filname){
    http.get(url,function(res){
        //注意：当请求的是二进制流文件时，响应头一定要设置编码成二进制binary的
        res.setEncoding('binary');
        var img = '';
        res.on('data',function(data){
            img +=data;
        }).on('end',function(){
            file.writeFileBinary(filname,img).then(function(){
                console.log(url+'下载成功');
            }).catch(function(){
                console.log(url+'下载失败');
            });
        }).on('error',function(){
            console.log('读取失败！！！');
        });
    })

}