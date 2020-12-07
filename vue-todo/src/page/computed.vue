<template>
	<div>
    <button type="button" name="button" @click="add">add</button>
		{{number}}
	</div>

</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
    	a: 1
    }
  },
  computed: {
    number: {
      get() {
				 return this.a + 1;
			},
			set(v) {
				// this.a = v - 1
			}
  }
  },
  methods:{
  	add() {
  		// this.number = 3;
			console.log(this.number)
			this.number = 3
			console.log(this.number)
			console.log(this.a);
  	}
  }
}
</script>

<style lang="css" scoped>
</style>
