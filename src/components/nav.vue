<template>
	<div class="nav">
		<div class="logo">
			<img src="favicon.ico">
			{{$store.state.title}}
		</div>
		<VuePerfectScrollbar class="scroll-area">
			<a class="item active">
				{{$store.state.activeNav}}
			</a>
			<aLink class="item" v-for="item in $store.state.nav" :href="item.url" target="_blank" :remark="item.remark">
				{{item.title}}
			</aLink>
		</VuePerfectScrollbar>
		<div class="search">
			<i class="el-icon-search"></i>
			<span class="searcher" @click="searchDrawerVisibility = true">搜索...</span>
		</div>
		<searchDrawer :visibility.sync="searchDrawerVisibility" />
	</div>
</template>

<script>
import searchDrawer from "./searchDrawer"
export default {
	name: 'pd-nav',
	components: {
		searchDrawer
	},
	mounted() {
	},
	data() {return {
		searchDrawerVisibility: false,
	}},
	methods: {
		handleTitleSubmit({title}) {
			this.$store.commit('setState',["title",title])
		}
	}
}
</script>

<style lang="less" scoped>
.nav {
	background: linear-gradient(#fff 75%, #e9eaf2);
	border-bottom: 1px solid #C0CCDA;
	box-shadow: 0 3px 5px rgba(31,45,62,.1),0 -1px #fff inset;
	display: grid;
	grid-template-columns: 250px 1fr auto;
	align-items: center;
}
.logo {
	padding-left: 20px;
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr auto;
	font-size: 18px;
	&:after {
		content: "";
		border-right: 1px solid #E5E9F2;
		height: 30px;
	}
}
img {
	margin-right: 5px;
	width: 32px;
	height: 32px;
}
.search {
	padding-right: 20px;
	color: #C0CCDA;
	&:before {
		content: "";
		border-right: 1px solid #E5E9F2;
		height: 30px;
	}
	i {
		color: #475669;
		margin-right: 8px;
		margin-left: 20px;
	}

}
.searcher {
	display: inline-block;
	padding-right: 40px;
	cursor: text;
}

.scroll-area {
	white-space: nowrap;
	padding: 0 20px;
}

</style>

<style lang="less">
.nav {
	.list {
		padding: 0 20px;
		overflow: auto hidden;
		white-space: nowrap;
	}
	.item {
		display: inline-block;
		white-space: nowrap;
		height: 70px;
		line-height: 70px;
		text-decoration: none;
		color: #409eff;
		padding: 0 16px;
		border-left: 1px solid transparent;
		border-right: 1px solid transparent;
		border-bottom: 1px solid transparent;
		&.active,&:hover {
			background: linear-gradient(rgba(32,160,255,.1) 75%,rgba(32,160,255,.3));
			border-left: 1px solid rgba(32,160,255,.2);
			border-right: 1px solid rgba(32,160,255,.2);
			border-bottom: 1px solid rgba(32,160,255,.2);
			box-shadow: 1px 0 #fff inset,-1px 0 #fff inset,0 -1px #fff inset;
		}
		&+.item {
			margin-left: 1px;
		}
	}
}
</style>
