<template>
	<div>
		<ul>
			<li v-for='(item, index) in list' :class="{activeClass : index==active }" 
			@click="toggleClass(index)">{{item.label}}</li>
		</ul>

	</div>

</template>

<script>
export default {
  name: 'class',
 
  data () {
    return {
    	active: 0,
    	list:[
	    	{label:1,value:'a'},
	    	{label:2,value:'b'},
	    	{label:3,value:'c'},
	    	{label:4,value:'d'},
    	]
    }
  },
  methods:{
  	toggleClass(index) {
  		this.active = index
  	}
  }
}
</script>

<style lang="css" scoped>
ul {
	width:40%;
	margin-bottom: 40px
}
li {
	list-style:none;
	height: 20px;
	border:1px solid #ddd;
	margin-top: 10px;

}
.activeClass {
	background:red
}
</style>