function Compile(node, vm) {
  if (node) {
    this.$frag = this.nodeToFragment(node, vm);
    return this.$frag;
  }
}
Compile.prototype = {
  nodeToFragment(node, vm) {
    const self = this;
    const frag = document.createDocumentFragment();
    let child;
    while (child = node.firstChild) {
      self.compileElement(child, vm);
      frag.append(child)
    }
    return frag;
  },
  compileElement(node, vm) {
    const reg = /\{\{(.*)\}\}/;
    if (node.nodeType === 1) {
      const attr = node.attributes;
      for (let i = 0; i < attr.length; i++) {
        if (attr[i].nodeName == 'v-model') {
          var name = attr[i].nodeValue;
          node.addEventListener('input', (e) => {
            vm[name] = e.target.value
          })
          new Watcher(vm, node, name, 'value');
        }
      }
    }
    if (node.nodeType === 3) {
      if (reg.test(node.nodeValue)) {
        var name = RegExp.$1;
        name = name.trim()
        new Watcher(vm, node, name, 'nodeValue')
      }
    }
  },
}
