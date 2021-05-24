<template>
	<div class="frame">
		<Nav />
		<div class="wrapper">
			<Aside />
			<div class="main">
				<Tabs />
				<Footer />
			</div>
		</div>
	</div>
</template>

<script>
import Nav from "./nav";
import Aside from "./aside";
import Tabs from "./tabs";
import Footer from "./footer";
export default {
	name: 'HelloWorld',
	components: {
		Nav,Aside,Tabs,Footer
	},
	mounted() {
		this.requestData();
	},
	methods: {
		requestData() {
			var loading = this.$loading({
				lock: true,
				text: '加载数据...',
			});
			new Promise((resolve,reject)=>{
				var db = window.data;
				if (!db) {
					fetch('./data.json')
					.then((response)=> {
						resolve(response.json())
					})
				} else {
					resolve(db)
				}
			})
			.then((data)=>{
				for (var key in data) {
					this.$store.commit('setState',[key,data[key]]);
				}
			})
			.catch((sth)=>{
				console.log(sth)
				setTimeout(()=>{
					this.$loading({
						lock: true,
						text: '数据错误！',
						spinner: ' ',
						background: '#fff'
					});
				},16)
			})
			.finally(()=>{
				loading.close();
			})
		}
	}
}
</script>

<style lang="less">
	html {
		background: #E5E9F2;
		&:not(.is-mac),
		&:not(.is-mac) * {
			scrollbar-width: thin;
			scrollbar-color: rgba(130,140,150,.4) transparent;
		}
		&:not(.is-mac)::-webkit-scrollbar,
		&:not(.is-mac) *::-webkit-scrollbar {
			width: 6px;
			height: 6px;
			background-color: transparent;
		}
		&:not(.is-mac)::-webkit-scrollbar-thumb,
		&:not(.is-mac) *::-webkit-scrollbar-thumb {
			background-color: rgba(130,140,150,.4);
		}
	}
	body {
		margin: 0;
		font-family: "微软雅黑", "Microsoft YaHei UI", "Microsoft YaHei","PingFang SC","Helvetica Neue", Helvetica, Arial, sans-serif !important;
		color: #475669;
	}
	* {
		box-sizing: border-box;
	}
	.frame {
		.nav {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 100;
			height: 70px;
		}
		.wrapper {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			.aside {
				bottom: 0;
				position: fixed;
				top: 70px;
				left: 0;
				width: 250px;
				overflow: auto;
				z-index: 1;
			}
			.main {
				margin-left: 250px;
				padding-top: 70px;
				height: 100%;
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
