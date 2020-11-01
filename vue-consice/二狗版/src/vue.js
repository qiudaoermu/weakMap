
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
  this.vueDomInnerHTML = this.vueDom.innerHTML;
  this.option = option;
  let dataType = Object.prototype.toString.call(data);
  let keysVal = '';
  let observerData = [];
  if (dataType === '[object Function]') {
    let d = data();
    for (var i in d) {
      this[i] = d[i];
      console.log(d[i]);
      observerData.push(i);
    }
    keysVal = d;
  } else if (dataType === '[object object]') {
    for (var j in data) {
      this[j] = data[j];
      observerData.push(i);
    }
    keysVal = data;
  } else {
    console.error('data should be function or Object');
  }
  this._data = keysVal;
  // renderHTML(keysVal, this);
  let compile = new Compile(this);
  let renderHtml = compile.renderTIFragment();
  this.vueDom.appendChild(renderHtml);
  let compileElement = compile.nodeToFragment();
  this.vueDom.appendChild(compileElement);
  new Observer(this, observerData);
};
// 渲染html
function renderHTML(keysVal, vm) {
  let obj = {};
  for (var f in keysVal) {
    let k = f;
    f = '{{' + f + '}}';
    obj[f] = keysVal[k];
  };
  let html = '';
  for (var c in obj) {
    if (html) {
      html = html.replace(c, obj[c]);
    } else {
      html = vm.vueDomInnerHTML.replace(c, obj[c]);
    }
  }
  vm.vueDom.innerHTML = html;
  let compileElement = new Compile(vm).$flag;
  vm.vueDom.appendChild(compileElement);
}
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
function queueWatcher(_this, obj) {
  setTimeout(() => {
    let compile = new Compile(obj);
    let compileElement = compile.renderTIFragment();
    obj.vueDom.appendChild(compileElement);
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
          // renderHTML(data, obj);
          if (_this.flag === false) {
            queueWatcher(_this, obj);
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
  renderTIFragment() {
    const frag = document.createDocumentFragment();
    let child;
    let node = this.vueDom;
    while (child = node.firstChild) {
      this.renderDataHtml(child);
      frag.append(child);
    }
    return frag;
  },
  renderDataHtml(node) {
    const reg = /\{\{(.*)\}\}/;
    if (reg.test(node.innerHTML)) {
      node.innerHTML = node.innerHTML.replace(node.innerHTML, this._this[RegExp.$1]);
      node.$InnerHTML = '{{' + RegExp.$1 + '}}';
    }
    if (reg.test(node.$InnerHTML)) {
      node.innerHTML = node.innerHTML.replace(node.innerHTML, this._this[RegExp.$1]);
    };
  },
  nodeToFragment() {
    const frag = document.createDocumentFragment();
    let child;
    let node = this.vueDom;
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
      this.vm.methods[this.nodeValue].call(this._this);
    };
    if (node.nodeType === 1) {
      const attr = node.attributes;
      for (let i = 0; i < attr.length; i++) {
        // 处理click事件
        if (attr[i].nodeName === '@click' || attr[i].nodeName === 'v-click') {
          this.nodeValue = attr[i].nodeValue;
          if (this.vm.methods.hasOwnProperty(this.nodeValue)) {
            node.addEventListener('click', fn);
          };
        }
        // v-model
        if (attr[i].nodeName === 'v-model') {
          node.addEventListener('input', (e) => {
            console.log(e);
          });
        }
      }
    }
  }
}