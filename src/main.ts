import Vue from "vue";
import App from "./App.vue";
import {syavue} from "@/components"

Vue.config.productionTip = false;

Vue.use(syavue)

new Vue({
  render: h => h(App)
}).$mount("#app");
