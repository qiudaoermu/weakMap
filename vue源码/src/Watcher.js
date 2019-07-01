function Watcher(vm, node, name, type) {
  Dep.target = this;
  this.name = name; // text
  this.node = node; // 当前节点
  this.vm = vm; // vm
  this.type = type; // nodeValue
  this.update();
  Dep.target = null;
}
Watcher.prototype = {
  update() {
    this.get()
    const batcher = new Batcher();
    batcher.push(this);
    // this.node[this.type] = this.value;
  },
  cb() {
    this.node[this.type] = this.value;
  },
  get() {
    this.value = this.vm[this.name];
  },
}
