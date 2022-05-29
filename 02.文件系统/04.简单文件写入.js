/*
简单文件写入：
 fs.writeFile(file,data[,options],callback) 这个是异步简单写入
 fs.writeFileSync(file,data[,options]) 这个是同步简单写入
 参数: 
    file: 要操作的文件的路径
    data: 要写入的数据
    options: 选项，可以对写入进行一些设置,一般是一个对象，option里面有 flag, mode, encoding 属性。
    callback: 当写入完成后执行的回调函数

*/

var fs = require('fs')
fs.writeFile('hello3.txt', "我是简单写入,通过writeFile写入的", (err) => {
    if (!err) {
        console.log('写入成功')
    }
})