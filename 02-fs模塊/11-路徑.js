/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-20 22:56:58
 * @LastEditTime: 2024-10-20 23:20:07
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\02-fs模塊\11-路徑.js
 * @Description: 有需要請描述一下
 */
const fs = require('fs')

//相對路徑參照物: 命令行的工作目錄

//絕對路徑'全局變量'保存的是:所在文件的所在目錄的絕對路徑
console.log(__dirname)

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