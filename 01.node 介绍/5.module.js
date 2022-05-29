// 利用module.exprots 统一暴露： 注意需要加module,  思考一下堆内存 栈内存 （heap and stack)

module.exports = {
        name: 'liiyi',
        age: 28,
        hello: function() {
            console.log('hello')
        }
    }
    //  上面暴露等同于： 
exports.name = 'liyi';
exports.age = 28;
exports.hello = function() {
    console.log('hello')
}