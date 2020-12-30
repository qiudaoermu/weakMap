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
// 视图滚动到顶部
export let scrollTop = () => {
  window.scrollTo(0, 0);
}