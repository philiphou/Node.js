/* 
同步和异步以及简单文件的写入都不适合大文件的写入：因为都是一次性写入。会导致：
1. 性能较差
2. 容易导致内存溢出，
流式文件写入： 类似于一个水缸到另一个水缸采取虹吸吸管流入



*/

/*  流式写入：1. 创建一个可写流： fs.createWriteStream(path[,options])，可以创建一个可写流 
    参数： 
        1. path: 文件路径
        2. options: 配置的参数，一般可以省略

*/


const fs = require('fs')

var ws = fs.createWriteStream('hello3.txt')

// 通过ws 向文件中输出内容

ws.write('这是通过流式写入方法写入的内容。')
ws.write('这是通过流式写入方法写入的第二部分内容。') // 这样可以分多次写入内容
ws.write('锄禾日当午') // 这样可以分多次写入内容

//  关闭流

ws.end(); // 表示第水源水池中水管拔掉

//可以通过监听流的 open 和 close  事件，来监听流的打开和关闭


ws.once('open', () => {
        console.log('流打开了')
    }) // 。on('open',callback) 是绑定一个长期状态事件。 once 是绑定一个状态变化瞬间事件,相当于jQuery里的 one, 表示是一个一次性事件，触发一次即失效；



ws.once('close', () => {
    console.log('流关闭了')
})