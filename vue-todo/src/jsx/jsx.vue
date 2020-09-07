<template lang="html">
	<div>
		jsx
		<el-button>sss</el-button>
	</div>
</template>

<script>

import AnchoredHeading from './anchored-heading.vue'
export default {
  name: 'jsx',
  data () {
    return {
    	level: 1
    }
  },
  created() {
  	console.log('created')
  },
  render: function (h) {
    return (
      <AnchoredHeading level={1}>
        <span>Hello</span> world!
      </AnchoredHeading>
    )
  }
}
</script>

<style lang="css" scoped>
</style>