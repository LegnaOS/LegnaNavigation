<template>
	<el-drawer
	:visible="visibility"
	direction="rtl"
	size="300px"
	:show-close="false"
	:append-to-body="true"
	:close-on-press-escape = 'false'
	:wrapperClosable="true"
	:before-close="handleClose">
		<div class="pd-drawer-content">
			<div class="search">
				<el-input
					placeholder="搜索..."
					prefix-icon="el-icon-search"
					:clearable="true"
					v-model="query"
					ref="input"
					@input="handleQuery"
					>
				</el-input>
			</div>
			<div class="navcard-wrapper">
				<navCard :dataBus="card" v-for="card in cards" />
				<div class="no-data" v-show="cards.length == [] && query !== ''">无匹配的搜索结果</div>
			</div>
		</div>
	</el-drawer>
</template>

<script>
import navCard from "./navCard"
export default {
	name: 'search_module',
	components: {
		navCard
	},
	props: {
		visibility: Boolean,
	},
	data(){return {
		query: "",
		cards: []
	}},
	watch: {
		visibility(val) {
			if (val) {
				this.query = "";
				this.cards = [];
				this.$nextTick(()=>{
					this.$refs.input.focus();
				})
			}
		}
	},
	mounted() {
	},
	methods: {
		handleClose() {
			//点击取消、点击外侧、点击x进行关闭
			this.$emit("update:visibility", false)
		},
		handleQuery(query) {
			this.cards = query ? this.$store.state.tabs.map( tab => 
				tab.locked ? [] : tab.links.filter( links => 
					links.title.toLowerCase().includes(query.toLowerCase()) || links.url.toLowerCase().includes(query.toLowerCase())
				)
			).flat() : [];
		}
	}
}
</script>

<style lang="less" scoped>
.pd-drawer-content {
	margin-top: -52px;
	overflow: auto;
	height: 100vh;
}
.search {
	display: grid;
	height: 70px;
	align-items: center;
	position: sticky;
	top: 0;
	background: linear-gradient(#fff 60px,rgba(255,255,255,0));
	padding: 0 20px;
	z-index: 1;
}
.navcard-wrapper {
	padding: 0 20px;
	display: grid;
	gap: 30px;
	padding-bottom: 30px;
}
.no-data {
	text-align: center;
	padding-top: 15px;
	font-size: 13px;
	color: #99A9BF;
}
</style>