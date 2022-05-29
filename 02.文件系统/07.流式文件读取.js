/**
 *  普通文件读取是把文件一次性读取返回一个data buffer， 这样性能低，还有可能内存溢出
 * 流式读取类似于流式写入，好比有一个水管，从水池源向一个容器中引流； 流式文件读取适用于大文件，可以分多次将文件读取到内存中；
 * 
 */

var fs = require('fs')

// 1.流式读取，创建一个可读流
var rs = fs.createReadStream('hello3.txt')
    // 2. 监听流的开启与关闭

rs.once('open', () => {
    console.log('可读流已经开启')
})
rs.once('close', () => { console.log('可读流已经关闭') })

//3. 开始流式读取: 如果要读取一个可读流中的数据，必须要为我们可读流绑定data事件，data 事件绑定完毕，它会自动开始读取数据；读完了，可读流自动关闭；
//注意，此时用 on 监听，而不是once  一次性监听
//  读取到的数据都是通过回调函数里的参数data返回；
rs.on('data', (data) => {
    console.log(data.toString())
})