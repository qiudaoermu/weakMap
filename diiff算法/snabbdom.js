
import obj from "./apiDom.js";
let apiDom = new obj.ApiDom();
let vnode = obj.vnode;

const element = vnode.h("div", {id: "container", key: 1}, "", [
  vnode.h("h3", {key: 4}, "I AM H3 NEW"),
  vnode.h("div", {key: 3}, "I am div", []),
  vnode.h("h4", {key: 2}, "I AM h4 NEW", [])
]);

const newVnode = vnode.h("div", {id: "container", key: 1}, "", [
  vnode.h("h4", {key: 2}, "I AM h4 NEW", []),
  vnode.h("p", {key: 3}, "I AM P", []),
  vnode.h("h3", {key: 4}, "I AM H3 NEW")
]);

const updateChildren = (vnodes, newVode, parentElm) => {
  let newStartIndex = 0;
  let newEndIndex = newVode.children.length - 1;
  let oldStartIndex = 0;
  let oldEndIndex = vnodes.children.length - 1;
  let newStartNode = newVode.children[0];
  let newEndNode = newVode.children[newEndIndex];

  let oldStartNode = vnodes.children[0];
  let oldEndNode = vnodes.children[oldEndIndex];

  // [ h1, h4, h5 ]
  // [ h1, p1, h5, p2 ]

  while (newStartIndex <= newEndIndex && oldStartIndex <= oldEndIndex) {
    if (vnode.isSameNode(newStartNode, oldStartNode)) {
      // 头头
      patchVnode(oldStartNode, newStartNode, parentElm);
      newStartNode = newVode.children[++newStartIndex];
      oldStartNode = vnodes.children[++oldStartIndex];
    } else if (vnode.isSameNode(newStartNode, oldEndNode)) {
      // 新头旧尾
      apiDom.insertAfter(parentElm, newStartNode, oldStartNode);
      newStartNode = newVode.children[++newStartIndex];
      oldEndNode = vnodes.children[--oldEndIndex];
    } else if (vnode.isSameNode(newEndNode, oldEndNode)) {
      // 尾尾;
      // --oldEndIndex;
      patchVnode(oldEndNode, newEndNode, parentElm);
      newEndNode = newVode.children[--newEndIndex];
      oldEndNode = vnodes.children[--oldEndIndex];
    } else if (vnode.isSameNode(newEndNode, oldStartNode)) {
      // 新尾旧头
      // 1 2 3 4;
      // 5 3 2 1;
      apiDom.insertAfter(parentElm, newStartNode, oldStartNode);
      newStartNode = newVode.children[++newStartIndex];
      oldEndNode = vnodes.children[--oldEndIndex];
      console.log("log");
    } else {
      // 头头 头尾 尾尾 尾头都不相同
      apiDom.insertChild(parentElm, newStartNode, oldStartNode);
      newStartNode = newVode.children[++newStartIndex];
    }
  }
  // 尾部没有相同，向右新增
  if (newStartIndex <= newEndIndex) {
    apiDom.appendChild(
      parentElm,
      newVode,
      newStartIndex,
      newEndIndex,
      oldStartIndex
    );
  }
  // [h1, p1, p2, h5]
  for (; oldStartIndex <= oldEndIndex; oldStartIndex++) {
    apiDom.removeChild(parentElm, vnodes, oldStartIndex);
  }
};

const patchVnode = (newNode, oldVnode, parentElm) => {
  apiDom.setTextContent(oldVnode, newNode, parentElm);
  let nextLevelParentElm = Array.from(parentElm.childNodes)
    .filter((item) => item.nodeType === 1)
    .find((item) => {
      return +item.getAttribute("key") === oldVnode.props.key;
    });
  if (newNode.children.length !== 0 && oldVnode.children.length !== 0) {
    updateChildren(newNode, oldVnode, nextLevelParentElm);
  }
};

const patch = (element, newVode) => {
  let vnodes;
  if (vnode.isVnode(element)) {
    // 不是虚拟dom转换为虚拟dom
    vnodes = vnode.translateDomToVNode(element);
  } else {
    vnodes = element;
  }

  if (vnode.isSameNode(vnodes, newVode)) {
    let oldElement = vnode.getParentElm(vnodes);
    updateChildren(vnodes, newVode, oldElement);
    return vnode.createVirtualElementFromDom(oldElement);
  } else {
    // 新增元素
    let newElement = vnode.createDomFromVnode(newVode);
    // 如果容器相同并且容器是空的,
    if (
      element.getAttribute("class") === newVode.props.class ||
      element.getAttribute("id") === newVode.props.id
    ) {
      let parentNode = element.parentNode;
      parentNode.removeChild(element);
      parentNode.appendChild(newElement);
      return vnode.createVirtualElementFromDom(newElement);
    } else {
      // 容器不相同直接替换
      let parentNode = element.parentNode;
      parentNode.removeChild(element);
      parentNode.appendChild(newElement);
      return vnode.createVirtualElementFromDom(newElement);
    }
  }
};

const container = document.getElementById("container");
const vn = patch(container, element);
const vnnew = patch(vn, newVnode);
console.log(vnnew);
