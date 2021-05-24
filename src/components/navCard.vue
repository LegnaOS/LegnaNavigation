<template>
	<div class="navCard" :class="getCardClass()">
		<div class="title">
			<div class="firstLetter-container">
				<span class="firstLetter">{{dataBus.title[0]}}</span>
			</div>
			<div class="funcs"><slot></slot></div>
		</div>
		<div class="link-container">
			<aLink :href="dataBus.url" target="_blank" :remark="dataBus.remark">{{dataBus.title}}</aLink>
		</div>
	</div>
</template>

<script>
export default {
	name: 'pd-nav-card',
	props: {
		dataBus: Object
	},
	mounted() {
	},
	methods: {
		getCardClass() {
			var result = "";
			switch ((this.dataBus.title + this.dataBus.url).length % 6) {
				case 0: result = "success";break;
				case 1: result = "warning";break;
				case 2: result = "danger";break;
				case 3: result = "primary";break;
				case 4: result = "purple";break;
				case 5: result = "orange";break;
			}
			return result;
		}
	}
}
</script>

<style lang="less" scoped>
.success {
	color: #67C23A;
	.link-container {
		box-shadow: 0 3px 5px #e1f3d8;
		background: linear-gradient(#fff,#f0f9eb);
	}
}
.warning {
	color: #E6A23C;
	.link-container {
		box-shadow: 0 3px 5px #faecd8;
		background: linear-gradient(#fff,#fdf6ec);
	}
}
.danger {
	color: #F56C6C;
	.link-container {
		box-shadow: 0 3px 5px #fde2e2;
		background: linear-gradient(#fff,#fef0f0);
	}
}
.primary {
	color: #409eff;
	.link-container {
		box-shadow: 0 3px 5px #d9ecff;
		background: linear-gradient(#fff,#ecf5ff);
	}
}
.purple {
	color: #6f6ce1;
	.link-container {
		box-shadow: 0 3px 5px #d9e3ff;
		background: linear-gradient(#fff,#ecf1ff);
	}
}
.orange {
	color: #ff9010;
	.link-container {
		box-shadow: 0 3px 5px #ffebd9;
		background: linear-gradient(#fff,#fff5ec);
	}
}
.navCard {
	position: relative;
	// color: #ddd;
	font-size: 15px;
	.link-container {
		border: 3px solid currentColor;
		border-radius: 0 8px 8px;
		// box-shadow: 0 3px 5px currentColor;
		// background: linear-gradient(#fff,#f0f2f7);
		a {
			text-decoration: none;
			display: block;
			padding: 10px 15px;
			color: rgba(31,45,62,.7);
			text-shadow: 0 2px #fff;
			box-shadow: 0 0 0 1px #fff inset;
			border-radius: 5px;
			transition: .25s;
			&:hover {
				color: inherit;
			}
		}
	}
	.title {
		display: grid;
		grid-template-columns: auto 1fr;
	}
	.firstLetter-container {
		background: currentColor;
		text-align: center;
		width: 40px;
		height: 20px;
		border-radius: 5px 5px 0 0;
		.firstLetter {
			font-size: 13px;
			color: #fff;
			line-height: 23px;
		}
	}
}
</style>

<style lang="less">

</style>
