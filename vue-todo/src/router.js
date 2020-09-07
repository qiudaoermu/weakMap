import Index from './app.vue'
import Address from './page/AddressPage.vue'
import Vmodel from './page/vModelParent.vue'
import swiperVue from './page/swiper-vue.vue'
import set from './page/$set.vue'
import queue from './page/queueAsync.vue'
import functional from './page/functional.vue'
import provide from './page/provideInject/A.vue'
import vueScroll from './page/vue-scroll.vue'
import elTree from './page/tree.vue'
import jsx from './jsx/jsx.vue'
export default {
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/',
      component: Index
    },
    {
      path: '/address',
      component: Address
    },
    // 自定义v-model组件
    {
      path: '/vModelPC',
      component: Vmodel
    },
    {
      path: '/swiperVue',
      component: swiperVue
    },
    {
      path: '/$set',
      component: set
    },
    {
      path: '/queue',
      component: queue
    },
    {
      path: '/functional',
      component: functional
    },
    {
      path:'/provide',
      component:provide
    },
    {
      path:'/vue-scroll',
      component:vueScroll
    },
    {
      path:'/el-tree',
      component:elTree
    },
    {
      path:'/jsx',
      component:jsx
    }

  ]
}
