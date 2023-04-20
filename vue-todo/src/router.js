import Index from "./app.vue";
import snabbdom from "./page/snabbdom.vue";

import Address from "./page/AddressPage.vue";
// import Vmodel from "./page/vModelParent.vue";
// import swiperVue from "./page/swiper-vue.vue";
// import set from "./page/$set.vue";
// import queue from "./page/queueAsync.vue";
// import functional from "./page/functional/functional.vue";
// import provide from "./page/provideInject/A.vue";
// import vueScroll from "./page/vue-scroll.vue";
// import elTree from "./page/tree.vue";
// import jsx from "./jsx/jsx.vue";
// import classv from "./page/class.vue";
// import stylev from "./page/stylev.vue";
// import lifePeriod from "./page/life-period/parent.vue";
// import computed from "./page/computed.vue";
// import preRouter from "./page/routerParams/pre.vue";
// import proRouter from "./page/routerParams/pro.vue";
// import canvaVertical from "./page/canvaVertical";
// import formActivity from "./page/formActivity";
export default {
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: "/",
      component: Index
    },
    {
      path: "/snabbdom",
      component: snabbdom
    }
    // {
    //   path: "/address",
    //   component: Address
    // }
    // // 自定义v-model组件
    // {
    //   path: "/vModelPC",
    //   component: Vmodel
    // },
    // {
    //   path: "/swiperVue",
    //   component: swiperVue
    // },
    // {
    //   path: "/$set",
    //   component: set
    // },
    // {
    //   path: "/queue",
    //   component: queue
    // },
    // {
    //   path: "/functional",
    //   component: functional
    // },
    // {
    //   path: "/provide",
    //   component: provide
    // },
    // {
    //   path: "/vue-scroll",
    //   component: vueScroll
    // },
    // {
    //   path: "/el-tree",
    //   component: elTree
    // },
    // {
    //   path: "/jsx",
    //   component: jsx
    // },
    // {
    //   path: "/classv",
    //   component: classv
    // },
    // {
    //   path: "/stylev",
    //   component: stylev
    // },
    // {
    //   path: "/lifePeriod",
    //   component: lifePeriod
    // },
    // {
    //   path: "/computed",
    //   component: computed
    // },
    // {
    //   path: "/routerPre",
    //   name: "routerPre",
    //   component: preRouter
    // },
    // {
    //   path: "/routerPro",
    //   name: "routerPro",
    //   component: proRouter
    // },
    // {
    //   path: "/canvaVertical",
    //   name: "canvaVertical",
    //   component: canvaVertical
    // },
    // {
    //   path: "/form-activity",
    //   name: "form-activity",
    //   component: formActivity
    // }
  ]
};
