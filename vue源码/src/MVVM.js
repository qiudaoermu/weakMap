function Vue(options) {
  this.data = options.data;
  const data = this.data;
  observe(data, this);
  const id = options.el;
  const dom = new Compile(document.getElementById(id), this);
  // 编译完成后，将dom返回app中
  document.getElementById(id).appendChild(dom);
}
