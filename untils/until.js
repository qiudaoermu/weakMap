
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

// 设置localStorage
export let ls =  {
  set(val, key){ 
    window.localStorage.setItem(val, key)
  },
  get(key) {
    return window.localStorage.getItem(key)
  },
  remove(key) {
    return window.localStorage.removeItem(key)
  },
  clearAll() {
    window.localStorage.clear()
  }
}

// 删除对象属性
export let deleteProp = (obj, propArr) => {
  propArr.forEach(element => {
    delete obj[element]
  });
}

// 获取当前日期 2020-10-08
export const getDay = () => {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = new Date().getDate();
  day = day < 10 ? `0${day}` : day;
  const data = `${year}-${month}-${day}`;
  return data;
};

// 视图滚动到顶部
export let scrollTop = () => {
  window.scrollTo(0, 0);
} 
