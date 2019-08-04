import Vue from 'vue';
import App from './RouterView.vue';
import './assets/styles/global.styl'
const root = document.createElement('div');
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import routers from './router.js'
Vue.use(MintUI)
Vue.use(VueRouter)
import { person } from './new.js'
console.log(person)
setTimeout(() => {
  console.log(person)
},1000)
const router = new VueRouter(routers)

document.body.appendChild(root);


new Vue({
    router,
    render:(h) => h(App)
}).$mount(root);
