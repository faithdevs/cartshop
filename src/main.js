import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import formatNumber from "./helpers";

Vue.config.productionTip = false;

// allow the formatNumber function to be used as a filter
Vue.filter("formatCurrency", function(value) {
	return formatNumber(value, 2, ".", ",");
});

// vue toast
// eslint-disable-next-line no-undef
Vue.use(VueToast);

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
	container: "body",
	duration: 700,
	easing: "ease",
	offset: 0,
	force: true,
	cancelable: true,
	onStart: false,
	onDone: false,
	onCancel: false,
	x: false,
	y: true
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
