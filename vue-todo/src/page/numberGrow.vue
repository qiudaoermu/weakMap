<template>
    <div class="number-grow-warp">
        <span ref="numberGrow" :data-time="time" class="number-grow" :data-value="value">3,343</span>
    </div>
</template>
<script>
	export default {
		props: {
			time: {
				type: Number,
				default: 2
			},
			value: {
				type: Number,
				default: 720000
			}
		},
		methods: {
			numberGrow (ele) {
				let _this = this
				let current = 0
				let start = 3343
				let t = setInterval(function () {
					start += 1
					if (start > _this.value) {
						clearInterval(t)
						start = _this.value
						t = null
					}
					if (current === start) {
						return
					}
					current = start
					ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
				}, 1000)
			}
		},
		mounted () {
			this.numberGrow(this.$refs.numberGrow)
		}
	}
</script>
<style>
    .number-grow-warp{
        transform: translateZ(0);
    }
    .number-grow {
        font-family: Arial-BoldMT;
        font-size: 64px;
        color: #ffaf00;
        letter-spacing: 2.67px;
        margin:110px 0 20px;
        display: block;
        line-height:64px;
    }
</style>