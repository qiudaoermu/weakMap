
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
import Header from './component/header.js';
import Footer from './component/footer.js';
import Todo from './component/todo.vue';
export default {
  name: "app",
  data() {
    return {
      text: '',
      showAddressPicker: true,
      address: '广东-深圳市-福田区',
      message: 100
    };
  },
  components: {
    Header,
    Todo,
    Footer
  },
  mounted() {
    this.message = 2;
    console.log(this.message);
    console.log(this.$el.textContent); // => '未更新'
    // this.$nextTick(function() {
    //   console.log(this.$el.textContent); // => '已更新'
    // });
    this.updateMessage();
  },
  methods: {
    updateMessage: async function() {
      this.message = '已更新';
      console.log(this.$el.textContent); // => '未更新'
      await this.$nextTick();
      console.log(this.$el.textContent); // => '已更新'
    }
  }
};
</script>
<style>
.height {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
