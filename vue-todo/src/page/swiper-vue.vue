<template lang="html">
  <div class="home">
    <swiper  :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'swiper',
  data() {
    return {
      text: '',
      showAddressPicker: true,
      address: '广东-深圳市-福田区',
      modeValue:"modeValue",
      swiperOption: {
        effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 10,
            depth: 0,
            modifier: .6,
            slideShadows: false,
          },
          autoplay: {
            delay: 122500,
            disableOnInteraction: false,
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          paginationType: 'custom'
        }
    }
  },
  components: {
    swiper,swiperSlide
  },
  methods: {
    hidePicker() {
      // 接受子组件关闭popup事件
      this.showAddressPicker = false
    },
    showPicker() {
      this.showAddressPicker = !this.showAddressPicker
    },
    saveAddress( val ) {
      // 从子组件接受返回所选值 val
      this.address = val
      this.showAddressPicker = !this.showAddressPicker
    }
  }
}
</script>

<style lang="css">
.home{
  width: 42rem;
  background: #000
}
.swiper-container{
  width: 26rem;
  background: #000
}
.swiper-slide{
  height: 300px;
  background: #fff
}
.swiper-pagination-bullet-custom {
   width: 20px;
   height: 20px;
   text-align: center;
   line-height: 20px;
   font-size: 12px;
   color: #000;
   opacity: 1;
   background: rgba(0,0,0,0.2);
 }
 .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
   color: #fff;
   background: #007aff;
 }

</style>
