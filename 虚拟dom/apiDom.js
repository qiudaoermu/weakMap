// const h = (tag, props, html, children, elm) => {
//   return {
//     tag: tag,
//     props: props,
//     html: html,
//     children: children,
//     elm
//   };
// };
// const createDomFromVnode = (element) => {
//   if (typeof element === "string") {
//     return document.createTextNode(element);
//   }
//   const dom = document.createElement(element.tag);
//   for (let attribute in element.props) {
//     dom.setAttribute(attribute, element.props[attribute]);
//   }
//   dom.innerHTML = element.html;
//   element.children &&
//     element.children.forEach((child) => {
//       const childDom = createDomFromVnode(child);
//       dom.appendChild(childDom);
//     });
//   return dom;
// };

// const translateDomToVNode = (dom) => {
//   return h(dom.nodeName.toLowerCase(), {}, "", [], dom);
// };
// const createVirtualElementFromDom = (element) => {
//   if (element.nodeType === Node.TEXT_NODE) {
//     return element.textContent;
//   }
//   const children = [];
//   for (let i = 0; i < element.childNodes.length; i++) {
//     const child = element.childNodes[i];
//     if (child.nodeType !== 3) {
//       children.push(createVirtualElementFromDom(child));
//     }
//   }
//   const props = {};
//   for (let i = 0; i < element.attributes.length; i++) {
//     const attribute = element.attributes[i];
//     props[attribute.name] = attribute.value;
//   }
//   const tag = element.tagName.toLowerCase();
//   return h(tag, props, element.childNodes[0].textContent, children);
// };

class Vnode {
  h(tag, props, html, children, elm) {
    return {
      tag: tag,
      props: props,
      html: html,
      children: children,
      elm
    };
  }
  translateDomToVNode(dom) {
    return this.h(dom.nodeName.toLowerCase(), {}, "", [], dom);
  };
  createDomFromVnode(element) {
    if (typeof element === "string") {
      return document.createTextNode(element);
    }
    const dom = document.createElement(element.tag);
    for (let attribute in element.props) {
      dom.setAttribute(attribute, element.props[attribute]);
    }
    dom.innerHTML = element.html;
    element.children &&
      element.children.forEach((child) => {
        const childDom = this.createDomFromVnode(child);
        dom.appendChild(childDom);
      });
    return dom;
  }
  ranslateDomToVNode(dom) {
    return this.h(dom.nodeName.toLowerCase(), {}, "", [], dom);
  }
  createVirtualElementFromDom(element) {
    if (element.nodeType === Node.TEXT_NODE) {
      return element.textContent;
    }
    const children = [];
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i];
      if (child.nodeType !== 3) {
        children.push(this.createVirtualElementFromDom(child));
      }
    }
    const props = {};
    for (let i = 0; i < element.attributes.length; i++) {
      const attribute = element.attributes[i];
      props[attribute.name] = attribute.value;
    }
    const tag = element.tagName.toLowerCase();
    return this.h(tag, props, element.childNodes[0].textContent, children);
  }
  isVnode(element) {
    // 判断真实dom还是虚拟dom
    if (!element.tag) {
      return true;
    }
    return false;
  }

  getParentElm(vnode) {
    let handle = "#" + vnode.props.id || vnode.props.class;
    return document.querySelector(handle);
  }

  isSameNode(oldVode, newVode) {
    let hasSameElm = oldVode?.elm === newVode?.elm;
    let tag = oldVode?.tag === newVode?.tag;
    let hasSameKey = oldVode?.key === newVode?.key;
    return hasSameElm && hasSameKey && tag;
  }
}

// dom api
let vnode = new Vnode();
class ApiDom {
  removeChild(parentNode, vnode, childIndex) {
    let index = Array.from(parentNode.children).findIndex((child) => {
      return child.nodeName.toLowerCase() === vnode.children[childIndex].tag;
    });
    if (index === -1) return;
    parentNode.removeChild(parentNode.children[index]);
  }
  insertAfter(parentElm, newStartNode, oldstartNode) {
    let indexBefore = Array.from(parentElm.children).findIndex(
      (child) => child.nodeName.toLowerCase() === newStartNode.tag
    );
    let indexAfter = Array.from(parentElm.children).findIndex(
      (child) => child.nodeName.toLowerCase() === oldstartNode.tag
    );
    parentElm.insertBefore(
      parentElm.children[indexBefore],
      parentElm.children[indexAfter]
    );
  }
  insertChild(parentElm, newStartNode, oldStartNode) {
    let newElenemt = vnode.createDomFromVnode(newStartNode);
    let index = Array.from(parentElm.children).findIndex(
      (child) => child.nodeName.toLowerCase() === oldStartNode.tag
    );
    parentElm.insertBefore(newElenemt, parentElm.children[index]);
  }
  appendChild(parentNode, newNode, start, end, oldStartIndex) {
    for (let i = end; i >= start; i--) {
      let newElenemt = vnode.createDomFromVnode(newNode.children[i]);
      parentNode.insertBefore(newElenemt, parentNode.children[oldStartIndex]);
    }
  }
  setTextContent(oldVnode, newVnode, parentElm) {
    let before = Array.from(parentElm.children).find(
      (child) => child.nodeName.toLowerCase() === newVnode.tag
    );
    const childElements = Array.from(before.children);
    before.innerHTML = oldVnode.html;
    for (let i = 0; i < childElements.length; i++) {
      before.appendChild(childElements[i]); // 将保存在数组中的子元素添加回父元素
    }
  }
}

export default {ApiDom, vnode};
