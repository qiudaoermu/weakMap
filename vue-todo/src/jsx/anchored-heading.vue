<script>
export default {
  name: 'anchored-heading',
  props: {
    level: {
      type: Number,
      required: false
    }
	},
  data () {
    return {

    }
  },
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default, // 子节点数组
    )
  }
}
</script>

<style lang="css" scoped>
</style>