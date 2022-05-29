//  创建一个buffer
var str = "hello world"
    //  将上面的字符串保存到buffer中,使用buffer不需要引入模块，直接使用即可。语法： Buffer.from() 参数是需要转化为buffer 的字符串或者变量
var buf = Buffer.from(str)
console.log(buf) // 输出：<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
    // buffer专门用来存储这些二进制文件,但是是以十六进制显示，比如上面输出内容都是16进制显示；其实就是各个字母的unicode编码
    //  buffer中每一个元素的范围是 00-ff ，十六进制。 （0-255）十进制， 二进制就是（ 8个0 到 8 个1） 计算机的内存最小单元就是 byte, 1 byte = 8 bit 也就是 8位。 计算机内存中一个bite 就是一位，只能存1或者0， 
    //  8 个 bit 是一个字节，叫byte
    //  buffer 中的一个元素就占用计算机里的一个字节（byte); 1024 byte = 1kb; 1024 kb = 1 GB
console.log(str.length, buf.length) // 输出： 11,11  两个长度相同
    // buf.length: 是占用内存的大小； str.length: 是字符串的长度；

//  创建指定大小的一个buffer; 注意： buffer的所有构造函数都是不推荐使用，已经过期了。
var buf2 = new Buffer(1024) // 创建一个1024 byte (1kb)大小的 buffer，此方法已经废弃
    //  新方法： 
var buf3 = Buffer.alloc(10) // 创建一个大小为10个字节的buffer
console.log(buf3) // 输出:<Buffer 00 00 00 00 00 00 00 00 00 00>
    //  通过索引，操作 buf3中的元素： 
buf3[0] = 88 // 此处赋值是十进制88， 进入buf3后会自动转化为十六进制： 
console.log(buf3[0]) // 输出： 88， 此时一定是输出十进制的，这是默认的，只要打印出单个元素就是十进制的
console.log(buf3) // 输出：<Buffer 58 00 00 00 00 00 00 00 00 00> 注意：58 是十六进制，对应十进制的 88
    // Buffer.allocUnsafe(size) // 创建一个指定大小的buffer,但是连续内存里不会清空原来内存里保存的数据，可能包含敏感数据；