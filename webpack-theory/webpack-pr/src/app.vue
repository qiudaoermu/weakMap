<template>
  <div>
      <div class="cover" @click="onClickCover">
        cover
        <div class="content">
          content
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      showAddressPicker: true,
      address: '广东-深圳市-福田区'
    }
  },
  methods: {
    onClickCover() {
      console.log('onClickCover')
    }
  }
}
</script>
<style  lang="scss" scoped>
.cover {
  height: 30px;
  width: 30px;
  background: red;
  .content {
    height: 20px;
    width:20px
  }
}
</style>
