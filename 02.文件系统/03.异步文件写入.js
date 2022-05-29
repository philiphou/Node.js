/*
异步文件写入
异步写入调用方法，结果都是通过回调函数的参数返回的。 
回调函数有两个参数：
1. err 叫错误对象，如果没有错误，则为 Null
2. fd 文件的描述符
*/

const fs = require('fs')

// 打开文件
fs.open('hello2.txt', "w", function(err, fd) {
        console.log('我是回调函数里的')
            //console.log(arguments) // 输出： {‘0’：null,‘1’：3} 注意 第二个键值对中的 3 就是 fd， 文件标识符；
        if (!err) {
            //  如果没有出错，则对文件进行写入操作
            fs.write(fd, "我是异步写入的内容",
                function(err) {
                    if (!err) {
                        console.log("写入成功")
                    }
                    // 关闭文件

                    fs.close(fd, function(err) {
                        if (!err) {

                            console.log('文件以关闭')
                        }
                    })

                })

        } else {
            console.log(err)
        }
    }) // 此时是异步写入，需要添加一个回调函数作为参数；

console.log("我是外面的下面的执行的") // 这个控制台先输出，因为是异步非阻塞，先执行这个，再执行回调函数里的
    //fs.write(fd, "乘风破浪的姐姐") // 因为 open 是异步操作，不会阻塞下面程序的执行，