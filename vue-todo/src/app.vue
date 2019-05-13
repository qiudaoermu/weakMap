
<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover {
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999
        opacity .8
        z-index -1
    }
</style>

<template>
  <div>
    <Header/>
    <div id="app">
      <div id="cover"></div>
    </div>
    <Todo/>
    <Footer/>
  
  
  </div>
</template>

<script>
  import Header from './component/header.js'
  import Footer from './component/footer.js'
  import Todo from './component/todo.vue'
  import MyAddress from './component/address-picker/Address.vue'
  export default {
    name: "app",
    data() {
      return {
        text: '',
        showAddressPicker: true,
        address: '广东-深圳市-福田区'
      }
    },
    components: {
      Header,
      Todo,
      MyAddress,
      Footer
    },
    methods: {
  
    }
  }
</script>

<style>
  .height {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
