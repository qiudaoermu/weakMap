import Vue from 'vue';
import App from './RouterView.vue';
import './assets/styles/global.styl'
import VueRouter from 'vue-router'

const root = document.createElement('div');

Vue.use(VueRouter)
const Index = () => import('./app.vue')
const Address = () => import('./page/AddressPage.vue')
const Buttons = () => import('./page/test.vue')
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: Index },
    { path: '/address', component: Address },
    { path: '/test', component: Buttons },
  ],
})


document.body.appendChild(root);


new Vue({
    router,
    render: h => h(App),
}).$mount(root);
