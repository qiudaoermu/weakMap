<template>
	<div>
			<div :style="{'color':color}">color</div>
			<el-button @click="changeColor">changeColor</el-button>
	</div>

</template>

<script>
export default {
  name: 'stylev',
  data () {
    return {
    	color: 'red'
    }
  },
  methods:{
  	changeColor() {
  		this.color = 'black'
  	}
  }
}
</script>

<style lang="css" scoped>
</style>