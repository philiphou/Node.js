/*
  fs.existSync(path) 检查文件是否存在
  fs.statSync(path) 获取文件的状态
  fs.stat(path) 获取文件的状态（异步获取）,它会通过回调函数返回一个对象，对象保存了文件状态
  fs.unlink(path) 就是删除文件；
  fs.readDir(path,callback) 读取一个文件夹，回调函数里参数有读取内容files ( 返回一个数组）和 err 错误对象{}
 fs.truncate(path,length) 截取文件，参数是路径和截取长度； 
 fs.mkdir(path,callback) 创建一个文件夹
 fs.rmdir(path,callback) 删除一个文件夹
 fs.rename(oldpath, newpath,callback) 重新命名一个文件，也可以通过路径实现剪切效果
 fs.watchFile(path, listener) 监视文件的修改；listener 是一个回调函数， 当文件发生变化时候，回调函数被执行；
                    回调函数两个参数 1. curr 2. prev 都是文件状态 state 对象， 当前文件大小可以用. curr.size 属性读取
*/
const fs = require('fs')
var isExisting = fs.existsSync('hello.txt')
console.log(isExisting) // 输出： true
fs.stat('hello3.txt', (err, state) => {
    console.log(state)
    console.log(state.isFile()) // 输出 true, 判断是否是一个文件 .isDirectory() 返回是否是一个文件夹

})