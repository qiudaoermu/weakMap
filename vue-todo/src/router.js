import Index from './app.vue'
import Address from './page/AddressPage.vue'
import Vmodel from './page/vModelParent.vue'
import swiperVue from './page/swiper-vue.vue'
import set from './page/$set.vue'
import queue from './page/queueAsync.vue'
export default {
    routes: [
      // 动态路径参数 以冒号开头
      { path: '/', component: Index },
      { path: '/address',component: Address},
      { path: '/vModelPC',component: Vmodel},
      { path: '/swiperVue',component: swiperVue},
      { path: '/$set',component: set},
      { path: '/queue', component: queue }
    ]
}
