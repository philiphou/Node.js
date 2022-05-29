/*
文件系统： （File System)
    - 文件系统就是通过Node来操作系统中的文件
    - 在node中， 与文件系统的交互是非常重要的，服务器的本质就是将本地的文件发送给远程的客户端
    - 使用文件系统fs 需要先引入 fs模块，fs 是核心模块，可以直接引入
    - fs 模块中所有的操作都有两种形式可供选择： 同步和异步
    - 同步文件系统会阻塞程序的执行，也就是除非操作完，否则不会向下执行代码
    -异步文件系统不会阻塞程序的运行，而是在操作完成时候，通过回调函数将结果返回；方法中 带Sync 的就是同步的，反之是异步的：
    - fs.close(fd,callback) 和 fs.closeSync(fd) 就是同步和异步的调用
*/

const fs = require('fs')
    /* 
    文件的写入-手动操作：
        1. 打开文件
        2. 向文件中写入内容
        3. 保存并关闭文件
    文件写入-fs 模块
    1. 文件打开： 异步fs.open()  或者 同步： fs.openSync(path,flags[,mode])
        path: 要打开文件的路径
        flags: 打开文件要操作的类型： 只读的，可写的 等等 r: 只读的； w: 可写的
        mode: 设置文件得操作权限，一般不用省略
    2. 该方法返回值会返回一个文件的描述符作为结果，可以通过该描述符对文件进行各种操作

    */

var fd = fs.openSync('hello.txt', "w")
console.log(fd) // 输出3； 出现这个表示文件已经打开；数字是几，是随机的
    /*
    2. 写入文件内容： fs。writeSync(fd,string,position [,encoding])
        
        参数： 
          fd: 文件的描述符，需要传递写入文件的标识符
          string: 要写入的内容
          position: 写入内容的起始位置，一般是可选的
          encoding: 默认编码 UTF-8 ，一般也不传


    */

fs.writeSync(fd, "今天天气真不错", 20)
    // 3. 关闭文件

fs.closeSync(fd)