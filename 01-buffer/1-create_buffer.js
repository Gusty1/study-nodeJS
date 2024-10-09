/*
 * @Author: Gusty a0985209465@gmail.com
 * @Date: 2024-10-09 16:28:20
 * @LastEditTime: 2024-10-09 16:54:02
 * @LastEditors: Gusty a0985209465@gmail.com
 * @FilePath: \GitHub\study-nodeJS\1-buffer\create_buffer.js
 * @Description: 
 */

//buffer創建主要有3種方式

//1. alloc
let buf = Buffer.alloc(10)
// console.log(buf)

//2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10000)
// console.log(buf_2)

//3. from
let buf_3 = Buffer.from('hello')
// console.log(buf_3)
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf_4)