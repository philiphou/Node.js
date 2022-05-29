/* 
文件读取：
1. 同步、异步文件读取
2. 简单文件读取: fs.readFile(path,[, optons],callback) 或者 fs.readFileSync(path,[,options])
    参数： 
        path: 要读取的文件的路径
        options: 读取的选项
        callback: 回调函数，读取以后通过回调函数返回读取内容；回调函数的参数是：1. errr ： 错误对象2. data; data就是读取到的内容，返回一个buffer
                  



3. 流式文件读取
*/

// 1. 简单文件读取：fs.readFile()

var fs = require('fs')

fs.readFile('hello3.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString()) // data是一个buffer,可以转换成字符串去读; 
})