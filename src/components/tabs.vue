<template>
	<div class="tabs">
		<el-tabs v-model="activeName">
			<el-tab-pane :name="tab.name" v-for="tab in $store.state.tabs">
				<span slot="label"><i class="el-icon-lock" v-if="tab.locked"></i> {{tab.name}}</span>
				<tabContent :dataBus="tab" v-if="activeName == tab.name" />
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import tabContent from "./tabContent"
export default {
	name: 'pd-tabs',
	components: {tabContent},
	data(){return{
		activeName: ""
	}},
	watch: {
		"$store.state.tabs": function() {
			this.getFirstTabName();
		}
	},
	mounted() {
		this.getFirstTabName();
	},
	methods: {
		getFirstTabName() {
			if ( this.$store.state.tabs.length > 0 ) {
				this.activeName = this.$store.state.tabs[0].name
			}
		}
	}
}
</script>

<style lang="less" scoped>
.tabs {
	background: #fff;
	margin: 16px;
	padding: 20px 30px 30px;
	border-radius: 10px;
	box-shadow: 0 8px 15px rgba(31,45,62,.1);
	flex-grow: 1;
}
</style>
<style>
.el-tabs__nav-wrap:after,.el-tabs__active-bar {
	height: 1px !important;
}
</style>