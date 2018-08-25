<template>

  <div class="container">
      <ul class="list">
          <li v-for="item in items">
              {{item}}
          </li>
      </ul>
  </div>

</template>

<script>
export default {
	data(){
		return {
			items:[1,2,3,4,5,6,7,8,9,10,1]
        }
    },
    name: "css3AniamtionScrollTextUpAndDown",
    methods: {
		animation(height,time) {

			document.querySelector('div.container').style.cssText = `height:${height}px;overflow:hidden;position:relative`
			let objurljs = document.querySelector("div.container ul");
			document.querySelector("div.container ul li").style.cssText= `height:${height}px;`
			let itemLength = this.items.length;
			let keyframes = `@keyframes ani {`;

			for(let i=0; i<=itemLength-1;i++){
				keyframes +=  100/(itemLength-1) * i+'%' +`{transform:translateY(`+ -height * i + `px)}`
			}
			keyframes+='}';

			let createStyle = document.createElement('style');
			createStyle.innerHTML = keyframes;
			document.querySelector('head').appendChild(createStyle);
			objurljs.style.animation = `ani ${time}s cubic-bezier(0, 0, 1, 0.07) infinite`

        }
    },
    mounted() {
	    this.animation(20,10)
    }
}
</script>

<style scoped>
  *{
      margin: 0;
      padding: 0;
  }
.container {
    border:1px solid #ddd;
}


</style>