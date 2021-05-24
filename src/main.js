import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import { Drawer,Button,MessageBox,Tabs,TabPane,Loading,Input} from 'element-ui';
Vue.use(Drawer)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Loading.directive)
Vue.use(Input)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$loading = Loading.service;

import aLink from './components/aLink'
Vue.component('VuePerfectScrollbar', VuePerfectScrollbar);
Vue.component('aLink', aLink);

Vue.config.productionTip = false

Vue.prototype.$unbind = (obj)=>{
	return JSON.parse(JSON.stringify({a:obj})).a;
}

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
