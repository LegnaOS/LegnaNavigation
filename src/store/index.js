import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		title:"",
		activeNav:"",
		asideTitle:"",
		footer:"",
		nav:[],
		aside:[],
		tabs:[],
		adminMode: true,
	},
	mutations: {
		setState(state,[stateName,val]) {
			state[stateName] = val;
		}
	},
	actions: {
	},
	modules: {
	}
})
