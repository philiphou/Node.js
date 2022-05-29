//  将一个可读流内容以流式写入方式写入到一个可写流中： rs.pipe(ws)


var fs = require('fs')

// 创建一个可读流,和可写流
var rs = fs.createReadStream('hello.txt')
var ws = fs.createWriteStream('hello4.txt')
    // 2. 监听流的开启与关闭, 也可以不创建，rs.pipe()会处理所有

// rs.once('open', () => {
//     console.log('可读流已经开启')
// })

// ws.once('open', () => {
//     console.log('可写流已经开启')
// })
// rs.once('close', () => { console.log('可读流已经关闭') })
// ws.once('close', () => { console.log('可写流已经关闭') })

//3. 从可读流向可写流中传输数据： 利用 rs.pipe() 属性方法，将可读流内容输入到可写流，参数是ws
rs.pipe(ws)