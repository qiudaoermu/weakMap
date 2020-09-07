import Vue from 'vue';
// import App from './RouterView.vue';
import './assets/styles/global.styl'
const root = document.createElement('div');
import VueRouter from 'vue-router'
// import routers from './router.js'
import {
    name
  }
  from './js/moduleA.js'
// import ElementUI from 'element-ui';
console.log(name)
// Vue.use(VueRouter)
// Vue.use(ElementUI);
console.log(1)
window.process = {
    env: {
        NODE_ENV:'production'
    }
}
console.log('4343')
// const router = new VueRouter(routers)

document.body.appendChild(root);


new Vue({
    // router,
    render:(h) => h(App)
}).$mount(root);
