<template>
	<div>
		child id is {{id}}
	</div>
</template>

<script>
export default {
	props:['id'],
	data() {
		return {}
	},
  name: 'child',
  beforeCreate() {
  	console.log(this.id,'id')
  	console.log('child-beforeCreate')
  },
  created() {
  	console.log(this.id,'id')
  	console.log('child-created')
  },
  beforeMount() {
  	console.log(this.id,'id')
  	console.log('child-beforeMount');
  },
  mounted() {
  	console.log(this.id,'id')
  	console.log('child-mounted')
  }
}
</script>

<style lang="css" scoped>
</style>