import Vue from 'vue';
import App from './RouterView.vue';
import './assets/styles/global.styl';
import VueRouter from 'vue-router';
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
import routers from './router.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {person} from './new.js';
const root = document.createElement('div');

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(ElementUI);

console.log(person);
setTimeout(() => {
  console.log(person);
}, 1000);
const router = new VueRouter(routers);

document.body.appendChild(root);

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root);
