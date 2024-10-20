/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-20 22:41:19
 * @LastEditTime: 2024-10-20 22:44:55
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\8-刪除文件.js
 * @Description:
 */
//1. 引入fs模塊
const fs = require('fs')

//2. 調用unlink方法 unlinkSync
// fs.unlink('./刪除測試.txt', err => {
//     if (err) {
//         console.log('刪除失敗')
//         return
//     }
//     console.log('刪除成功')
// })

//調用rm方法 rmSync
fs.rm('./刪除測試.txt', err => {
    if (err) {
        console.log('刪除失敗')
        return
    }
    console.log('刪除成功')
})