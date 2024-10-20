//1. 引入fs模塊 
const fs = require('fs')

//2. 調用appendFile
// fs.appendFile('./測試.txt', '，我好你好大家好', err => {
//     if (err) {
//         console.log('寫入失敗')
//         return
//     }
//     console.log('寫入成功')
// })

//同步與異步用法差不多，差別是同步沒有回調函數
fs.appendFileSync('./測試.txt', '\r\n今天明天昨天')