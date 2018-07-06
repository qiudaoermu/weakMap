import Vue from 'vue';
import App from './app';
import './assets/styles/global.styl'
const root = document.createElement('div');

import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)

document.body.appendChild(root);
new Vue({
    render:(h) => h(App)
}).$mount(root);