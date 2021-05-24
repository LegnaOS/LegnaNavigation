<template>
	<div class="footer">
		{{$store.state.footer}}
	</div>
</template>

<script>
export default {
	name: 'pd-footer',
	methods: {
		
	}
}
</script>

<style lang="less" scoped>
.footer {
	text-align: center;
	font-size: 12px;
	color: #99A9BF;
	padding-bottom: 16px;
}
</style>
