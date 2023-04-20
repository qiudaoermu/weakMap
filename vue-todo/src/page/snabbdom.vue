<template>
  <div id="container" style="textAlign:left"></div>
</template>

<script>
import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h
} from "snabbdom";

export default {
  mounted() {
    const patch = init([
      // Init patch function with chosen modules
      classModule, // makes it easy to toggle classes
      propsModule, // for setting properties on DOM elements
      styleModule, // handles styling on elements with support for animations
      eventListenersModule // attaches event listeners
    ]);

    const container = document.getElementById("container");

    // [ h1, h5 ]
    // [ h1, p1, h5, p2 ]
    const vnode = h("div#container.two.classes", {key: 1}, [
      h("h1", {style: {fontWeight: "bold"}}, "h1"),
      h("h3", {style: {fontWeight: "bold"}}, "h3"),
      h("h4", {style: {fontWeight: "bold"}}, "h4  "),
      h("p2", {style: {fontWeight: "bold"}}, "p2")
    ]);
    console.log(vnode);
    // Patch into empty DOM element – this modifies the DOM as a side effect
    let res = patch(container, vnode);
    console.log(res);
    const newVnode = h(
      "div#container.two.classes",
      {key: 1},
      [
        h("h1", {style: {fontWeight: "bold"}}, "h1"),
        h("p1", {style: {fontWeight: "bold"}}, "p1"),
        h("h5", {style: {fontWeight: "bold"}}, "h5"),
        h("p2", {style: {fontWeight: "bold"}}, "p2")
      ]
    );
    // Second `patch` invocation
    patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
  }
};
</script>
<style scoped>
#container {
  text-align:left;
}
* {
  list-style: none;
}
</style>
