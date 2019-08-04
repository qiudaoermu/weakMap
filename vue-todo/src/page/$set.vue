<template lang="html">
  <div class="home">
      {{slots[0].defaultIndex}}
      <button type="button" name="button" @click="onClickButton">
        点击改变slots
      </button>
      <div class="">
        {{html}}
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      showAddressPicker: true,
      address: '广东-深圳市-福田区',
      modeValue:"modeValue",
      slots : [
           {
             values: [
               '1:00',
               '2:00',
               '3:00',
               '4:00',
               '5:00',
               '6:00',
               '7:00',
               '8:00',
               '9:00',
               '10:00',
               '11:00',
               '12:00',
               '13:00',
               '14:00',
               '15:00',
               '16:00',
               '17:00',
               '18:00',
               '19:00',
               '20:00',
               '21:00',
               '22:00',
               '23:00',
               '24:00'
             ],
             defaultIndex: 12
           }]
    }
  },
  components: {
  },
  computed: {
    html(){
      return 4
    }
  },
  mounted(){
  },
  methods: {
    onClickButton(){
      // this.slots[0].defaultIndex = 15
      this.$set(this.slots[0],'defaultIndex',15)
    },
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
</style>
