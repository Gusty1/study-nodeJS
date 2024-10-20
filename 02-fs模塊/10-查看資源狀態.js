/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-20 22:56:58
 * @LastEditTime: 2024-10-20 23:17:28
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\10-查看資源狀態.js
 * @Description: 有需要請描述一下
 */
const fs = require('fs')

fs.stat(__dirname + '/ReGLOSS-フィーリングラデーション.mp4', (err, data) => {
    if (err) {
        console.log('操作失敗')
        return
    }
    console.log('操作成功')
    console.log(data)
    //isFile
    console.log(data.isFile())
    //isDirectory
    console.log(data.isDirectory())
})