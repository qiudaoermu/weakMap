
export function arrayToString(n) {
  return n.join('');
}

export function stringToArray(n) {
  return n.split('');
}

// 降序
export function bigToSmall(n) {
  return n.sort((a, b) => b - a);
}
// 升序
export function smallToBig(n) {
  return n.sort((a, b) => a - b);
}

// 迭代相乘
export function mutiply(n) {
  return n.reduce((a, b) => a * b);
}
// 迭代相加
export function recursiveAdd(n) {
  return n.reduce((a, b) => a + b);
}

// 删除对象属性
export let deleteProp = (obj, propArr) => {
  propArr.forEach(element => {
    delete obj[element]
  });
}

/*
*  从数组删除某个元素，
* @param { data } array 当前数组
* @param { index} Number 要删除元素的索引
*/
export const romove = (data,index) => {
  data.splice(index ,1)
}
/*
*  截取数组中的n位数
* @params { data } array 当前数组
* @param { index} Number 要删除元素的索引
*/
export const cut = (arr, start, n) => {
  let result = arr.slice(start, start + n);
  return result;
}

/*
  @params {number[[],[]]} nums
  @return []
 */
export flatNums = (nums) => {
  let flatResult = nums.flat(Infinity)
  return flatResult;
}

/*
  匹配任何非换行字符
 */
export regIsExit = (str) => {
  let reg = /.+/;
  return reg.test(str)
}
// 字符串删除最后一位
export removeLast = (str) => {
  str = str.slice(0,str.length-1);
  return str;
}