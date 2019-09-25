import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "./registerServiceWorker";
import './assets/fonts/fonts.css';
import i18n from './i18n.js'
// import translations from "./translations.js"

Vue.use(i18n);

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
	router,
	i18n,
	render: h => h(App),
	created(){
		document.title = "Web Portfolio";
	}
}).$mount("#app");


