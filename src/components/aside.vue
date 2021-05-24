<template>
	<div class="aside">
		<div class="small-title">
			{{$store.state.asideTitle}}
		</div>
		<aLink class="item" v-for="item in $store.state.aside" :href="item.url" target="_blank" :remark="item.remark">
			{{item.title}}
		</aLink>
	</div>
</template>

<script>
export default {
	name: 'pd-aside',
	methods: {
		
	}
}
</script>

<style lang="less" scoped>
.aside {
	background: #f9fafc;
	border-right: 1px solid #D3DCE6;
	box-shadow: -1px 0 #fff inset;
	padding: 24px 0 24px 24px;
	font-size: 15px;
}
.item {
	display: block;
	padding: 10px 0 10px 10px;
	color: inherit;
	text-decoration: none;
	border: 1px solid transparent;
	&:active,&:hover {
		background: #fff;
		color: #409eff;
		border: 1px solid #E5E9F2;
		border-right: none;
	}
}
.small-title {
	font-size: 13px;
	padding: 0 0 10px 10px;
	font-weight: bold;
	color: #99A9BF;
}
</style>
