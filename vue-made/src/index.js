import Vue from 'vue';
import App from './RouterView.vue';
import './assets/styles/global.styl'
const root = document.createElement('div');
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import routers from './router.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(ElementUI);
const router = new VueRouter(routers)
document.body.appendChild(root);
new Vue({
    router,
    render:(h) => h(App)
}).$mount(root);
