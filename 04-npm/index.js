

/**
 * 使用新導入的uniq包，就是去除數組中重複的值
 */

//1. 導入uniq包
const uniq = require('uniq')

//2. 使用函數

const arr = [4,3,4,6,1]

const result = uniq(arr)

console.log(result)
