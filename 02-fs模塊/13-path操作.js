const fs = require('fs')
const path = require('path')

//resolve 解決
//用來解決斜線不同的問題，後面的路徑不要只寫/會變絕對路徑
console.log(path.resolve(__dirname, '13-path操作.js'))
// path.resolve(__dirname,'./13-path操作.js')

console.log(__filename)
