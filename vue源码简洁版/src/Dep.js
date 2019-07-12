function Dep() {
  this.subs = [];
}
Dep.prototype = {
  addSub(sub) {
    this.subs.push(sub);
  },
  notify() {
    this.subs.forEach((sub) => {
      sub.update()
    })
  },
}
