const element = vnode.h("div", {id: "container", key: 1}, "", [
  vnode.h("ul", {key: 1}, "I am ul old", [
    vnode.h("li", {key: 1}, "old li", []),
    vnode.h("div", {key: 2}, "old div", [])
  ]),
  vnode.h("h5", {key: 2}, "I am H5", []),
  vnode.h("div", {key: 3}, "I am div", []),
  vnode.h("h3", {key: 4}, "I am H3 old")
]);

const newVnode = vnode.h("div", {id: "container", key: 1}, "", [
  vnode.h("ul", {key: 1}, "I am ul new", [
    vnode.h("li", {key: 1}, "new li", []),
    vnode.h("p", {key: 2}, "new p", []),
    vnode.h("div", {key: 3}, "old div", [])
  ]),
  vnode.h("h4", {key: 2}, "I AM h4 NEW", []),
  vnode.h("p", {key: 3}, "I AM P", []),
  vnode.h("h3", {key: 4}, "I AM H3 NEW")
]);