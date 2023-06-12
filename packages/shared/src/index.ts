/*
 * @Date: 2023-06-11 12:35:09
 * @LastEditTime: 2023-06-11 12:38:52
 * @Description: 
 */
// 判断一个数据是否为对象

export function isObject(value){
  return typeof value === 'object' && value !== null
}