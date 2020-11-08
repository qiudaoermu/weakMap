
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
  console.log(this.copyDom);
  this.vueDomInnerHTML = this.vueDom.innerHTML;
  this.option = option;
  let {keysVal, observerData} = setDateToVm(data, this);
  this._data = keysVal;

  let compile = new Compile(this);
  // let renderHtml = compile.renderTIFragment();
  // this.vueDom.appendChild(renderHtml);
  compile.traverse(this.vueDom, true);
  console.log(this.vueDom);
  // let compileElement = compile.nodeToFragment();
  // this.vueDom.remove()
  // this.vueDom.appendChild(compileElement);
  new Observer(this, observerData);
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
function Observer(obj, data, compile) {
  let _this = this;
  _this.flag = false;
  let newObj = {};
  for (var i in obj) {
    let value = obj[i];
    if (data.includes(i)) {
      newObj[i] = obj[i];
    }
    _this.ob(obj, newObj);
    Object.defineProperty(obj, i, {
      get(v) {
        return value;
      },
      set(newVal) {
        value = newVal;
        for (var i in obj) {
          if (data.includes(i)) {
            newObj[i] = obj[i];
          }
        };
        _this.ob(obj, newObj, compile);
      }
    });
  };
}
function queueWatcher(_this, obj, i, newVal) {
  setTimeout(() => {
    let compile = new Compile(obj);
    obj.vueDom.remove();
    obj.vueDom = obj.copyDom.cloneNode(true);
    compile.traverse(obj.vueDom, true);
    document.body.appendChild(obj.vueDom);
    // LIFECYCLE_HOOKS updated
    if (obj.option.watch) {
      obj.option.watch[i] && obj.option.watch[i](newVal);
    }
    obj.option.updated && obj.option.updated();
    _this.flag = false;
  });
  _this.flag = true;
}
Observer.prototype = {
  ob(obj, data, compile) {
    let _this = this;
    for (var i in data) {
      let value = data[i];
      Object.defineProperty(data, i, {
        get(v) {
          return value;
        },
        set(newVal) {
          value = newVal;
          if (_this.flag === false) {
            queueWatcher(_this, obj, i, value);
          };
        }
      });
    };
  }
};
function Compile(_this) {
  this.vueDom = _this.vueDom;
  this._this = _this;
  this.vm = _this.option;
  // this.$flag = this.nodeToFragment();
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
          node.remove();
          // node.removeAttribute(nodeName);
        };
      }
      if (node.children.length === 0 && reg.test(node.innerHTML)) {
        node.innerHTML = node.innerHTML.replace(node.innerHTML, this._this[RegExp.$1]);
      }
      // *****LIFECYCLE_HOOKS*****
      this._this.option.mounted && this._this.option.mounted();
    }
  },
  nodeToFragment() {
    const frag = document.createDocumentFragment();
    let node = this.vueDom;
    let child;
    while (child = node.firstChild) {
      this.compileElement(child);
      frag.append(child);
    }
    return frag;
  },
  clickEvent(nodeValue) {
    this.vm.methods[nodeValue].call(this._this);
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
