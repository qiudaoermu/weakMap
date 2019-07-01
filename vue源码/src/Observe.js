function defineReactive(obj, key, val) {
  // const dep = new Dep();
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) {
        dep.addSub(Dep.target)
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      console.log(val);
      dep.notify()
    },
  })
}
function observe(obj, vm) {
  Object.keys(obj).forEach((key) => {
    defineReactive(vm, key, obj[key]); // key:键 obj[key]:值
  })
}
