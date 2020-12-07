<template>
	<div>
		<child :id="id"/>
		{{id}}
	</div>
</template>
<script>
import child from './child.vue'
export default {
  name: 'parent',
	data() {
		return {
			id: 1
		}
	},
  components: {child},
  beforeCreate() {
  	console.log(this.id,'id')
  	console.log('parent-beforeCreate')
  },
  created() {
  	console.log(this.id,'id')
  	console.log('parent-created');
  },
  beforeMount() {
  	console.log(this.id,'id')
  	console.log('parent-beforeMount');
  },
  mounted() {
  	console.log(this.id,'id')
  	console.log('parent-mounted')
  }
}
</script>

<style lang="css" scoped>
</style>