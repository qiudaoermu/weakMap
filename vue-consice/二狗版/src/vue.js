
var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

function Vue(option) {
  let {data, el} = option;
  this.vueDom = document.querySelector(el);
  this.copyDom = this.vueDom.cloneNode(true);
  this.vueDomInnerHTML = this.vueDom.innerHTML;
  this.option = option;
  let {keysVal, observerData} = setDateToVm(data, this);
  // computed 监听属性
  this._data = keysVal;
  computed(this, observerData);
  let compile = new Compile(this);
  compile.traverse(this.vueDom, false);
  this.option.mounted && this.option.mounted();
  new Observer(this, observerData);
};
let computed = (_this, data) => {
  for (var key in _this.option.computed) {
    if (key in _this._data) {
      console.error(`The computed property + ${key} + is already defined in data.`);
      return;
    }
    _this[key] = _this.option.computed[key].call(_this);
  }
};
let setDateToVm = (data, vm) => {
  let dataType = Object.prototype.toString.call(data);
  let keysVal = '';
  let observerData = [];
  if (dataType === '[object Function]') {
    let d = data();
    for (var i in d) {
      vm[i] = d[i];
      observerData.push(i);
    }
    keysVal = d;
  } else if (dataType === '[object object]') {
    for (var j in data) {
      vm[j] = data[j];
      observerData.push(i);
    }
    keysVal = data;
  } else {
    console.error('data should be function or Object');
  }
  // *****LIFECYCLE_HOOKS*****
  vm.option.created && vm.option.created();
  return {keysVal, observerData};
};
// 渲染html
function Observer(vm, data, compile) {
  let _this = this;
  _this.flag = false;
  let _data = {};
  for (var i in vm) {
    let value = vm[i];
    if (data.includes(i)) {
      _data[i] = vm[i];
      _this.ob(vm, _data, i);
    }
    // 设置闭包可以找到更新的key
    ((j) => {
      Object.defineProperty(vm, i, {
        enumerable: true,
        get(v) {
          return value;
        },
        set(newVal) {
          if (value === newVal) return;
          value = newVal;
          if (data.includes(j)) {
            _data[j] = vm[j];
          }
        }
      });
    })(i);
  };
}
// 保持纯洁的data属性内的元素更新
Observer.prototype = {
  ob(vm, data, i) {
    let _this = this;
    let value = data[i];
    Object.defineProperty(data, i, {
      get(v) {
        return value;
      },
      set(newVal) {
        value = newVal;
        // 为了多个属性一次更新
        if (_this.flag === false) {
          queueWatcher(_this, vm, i, value);
        };
      }
    });
  }
};
function queueWatcher(_this, vm, key, newVal) {
  setTimeout(() => {
    computed(vm);
    let compile = new Compile(vm);
    // 删除第一次渲染的dom
    vm.vueDom.remove();

    // 把最初的template(包含{{i}})复制给 dom
    vm.vueDom = vm.copyDom.cloneNode(true);
    compile.traverse(vm.vueDom, true);
    document.body.appendChild(vm.vueDom);
    if (vm.option.watch) {
      vm.option.watch[key] && vm.option.watch[key].call(vm, newVal);
    }
    // LIFECYCLE_HOOKS updated
    vm.option.updated && vm.option.updated();
    _this.flag = false;
  });
  _this.flag = true;
}

function Compile(_this) {
  this.vueDom = _this.vueDom;
  this._this = _this;
  this.vm = _this.option;
}
Compile.prototype = {
  traverse(dom, flag) {
    if (dom.children.length >= 1) {
      let children = Array.prototype.slice.call(dom.children);
      children.forEach(item => {
        this.traverse(item, flag);
      });
    } else {
      this.renderDataHtml(dom);
      if (flag === true) {
        this.compileElement(dom);
      }
    }
  },
  renderDataHtml(node) {
    const reg = /\{\{(.*)\}\}/;
    if (node.nodeType === 1) {
      const attr = node.attributes;
      for (let i = 0; i < attr.length; i++) {
        let nodeName = attr[i].nodeName;
        this.nodeValue = attr[i].nodeValue;
        if (nodeName === 'v-show') {
          let show = this._this[attr[i].nodeValue] ? 'block' : 'none';
          node.style.display = show;
          node.removeAttribute(nodeName);
        }
        if (nodeName === 'v-if') {
          let r = Boolean(this._this[this.nodeValue]);
          if (!r) {
            node.remove();
          }
          node.removeAttribute(nodeName);
        }
        if (nodeName === 'v-for') {
          // item in items"
          let h = this.nodeValue.split('in');
          let value = h[1].trim();
          let vForArray = this._this[value];
          let frag = document.createDocumentFragment();
          vForArray.forEach(item => {
            let cElement = document.createElement(node.nodeName);
            if (reg.test(node.innerHTML)) {
              let temJx = '{{' + RegExp.$1 + '}}';
              cElement.innerHTML = node.innerHTML.replace(temJx, item);
              frag.append(cElement);
            };
          });
          node.parentNode.appendChild(frag);
          // 删除带有 v-for 属性的元素
          node.remove();
        };
      }
      // 只替换最后一层dom的innerHTML
      if (node.children.length === 0 && reg.test(node.innerHTML)) {
        node.innerHTML = node.innerHTML.replace(node.innerHTML, this._this[RegExp.$1]);
      }
    }
  },
  compileElement(node) {
    let fn = (e, nodeValue) => {
      this.vm.methods[this.nodeValueEvent].call(this._this);
    };
    if (node.nodeType === 1) {
      const attr = node.attributes;
      for (let i = 0; i < attr.length; i++) {
        let nodeName = attr[i].nodeName;
        // 处理click事件
        if (nodeName === '@click') {
          this.nodeValueEvent = attr[i].nodeValue;
          if (this.vm.methods.hasOwnProperty(this.nodeValueEvent)) {
            let event = nodeName.slice(1);
            node.addEventListener(event, fn);
          };
          node.removeAttribute(nodeName);
        }
        // v-model
        if (nodeName === 'v-model') {
          node.addEventListener('input', (e) => {
            console.log(e);
          });
        }
      }
    }
  }
};
