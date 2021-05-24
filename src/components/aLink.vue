<template>
	<a :href="remark ? null : href" :target="target" @click="handleClick"><slot /></a>
</template>

<script>
export default {
	name: 'pd-aLink',
	props: {
		href: String,
		target: String,
		remark: String,
	},
	mounted() {
	},
	methods: {
		handleClick() {
			if (this.remark) {
				this.$alert(this.remark, {
					confirmButtonText: '确定',
					type: 'warning',
				})
				.then(()=>{
					window.open(this.href)
				})
				.catch(()=>{

				})
			}
		}
	}
}
</script>

<style lang="less" scoped>
a {
	cursor: pointer;
}
</style>