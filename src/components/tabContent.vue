<template>
	<div class="tab-content">
		<div class="locked text-center" v-if="locked">
			<div><i class="el-icon-lock icon"></i></div>
			<input class="text-center" :placeholder="`输入 ${random} 解锁`" v-model="userInput" autocomplete="off" @input="handleChange">
			<div class="keyboard">
				<div v-for="i in 9" @click="handleAdd(i)">{{i}}</div>
				<div class="w-2" @click="handleAdd(0)">0</div>
				<div @click="handleBack()"><i class="el-icon-back"></i></div>
			</div>
		</div>
		<div v-else>
			<div class="navcard-wrapper">
				<navCard :dataBus="card" v-for="card in dataBus.links" />
			</div>
		</div>
	</div>
</template>

<script>
import navCard from "./navCard"
export default {
	name: 'pd-tab-content',
	components: {
		navCard
	},
	props: {
		dataBus: Object
	},
	data(){return{
		locked: this.dataBus.locked,
		random: Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000,
		userInput: ""
	}},
	methods: {
		handleChange() {
			if (this.userInput == this.random.toString()) {
				this.locked = false;
			}
		},
		handleAdd(val) {
			this.userInput = `${this.userInput}${val}`;
			this.handleChange();
		},
		handleBack() {
			this.userInput = ""
		}
	}
}
</script>

<style lang="less" scoped>
.tab-content {
	margin: 10px 0;
}
.text-center {
	text-align: center;
}
.locked {
	margin: 16px 0;
	display: grid;
	justify-content: center;
}
.icon {
	font-size: 64px;
	color: #C0CCDA;
}
input {
	padding: 5px 7px;
	border-radius: 6px;
	border: 1px solid currentColor;
	box-shadow: 0 0 0 2px rgba(32,160,255,.3);
	color: #409eff;
	outline: none;
	-webkit-appearance: none;
	margin-top: 10px;
	font-size: 14px;
}
.keyboard {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 10px;
	gap: 0;
	> * {
		cursor: pointer;
		min-width: 80px;
		height: 40px;
		border-bottom: 1px solid #EFF2F7;
		line-height: 40px;
		color: #99A9BF;
		transition: .25s;
		&:hover {
			color: #409eff;
			border-color: #409eff;
			background: rgba(32,160,255,.1);
			transition: 0s;
		}
	}
}
.w-2 {
	grid-column-start: 1;
	grid-column-end: 3;
}
.navcard-wrapper {
	display: grid;
	gap: 30px;
	@media (max-width: 768px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	@media (min-width: 768px) and (max-width: 991px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media (min-width: 992px) and (max-width: 1199px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	@media (min-width: 1200px) and (max-width: 1509px) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
	@media (min-width: 1510px) and (max-width: 1920px) {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
	@media (min-width: 1921px) and (max-width: 2500px) {
		grid-template-columns: repeat(6, minmax(0, 1fr));
	}
	@media (min-width: 2501px) and (max-width: 3000px) {
		grid-template-columns: repeat(7, minmax(0, 1fr));
	}
	@media (min-width: 3001px) {
		grid-template-columns: repeat(8, minmax(0, 1fr));
	}
}
</style>