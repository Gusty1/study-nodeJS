//1. 引入fs
const fs = require('fs')

//2. 異步讀取
// fs.readFile('./測試.txt', (err, data) => {
//     //err錯誤信息
//     //data文件內容
//     if(err){
//         console.log('讀取失敗')
//         return
//     }
//     //data是一個Buffer，要用toString()才看得懂
//     console.log(data.toString())
// })

//3. 同步讀取
const data = fs.readFileSync('./測試.txt')
console.log(data.toString())