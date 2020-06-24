import Vue from "vue";

import App from "./App.vue";
import VueSimpleAccordion from "./../../src/index.js";

import "prismjs/themes/prism.css";
import "./assets/styles/index.scss";

Vue.config.productionTip = false;

Vue.component("Prism", () => import("vue-prismjs"));

Vue.use(VueSimpleAccordion, {
  tags: {
    list: "dl",
    list__item: "div",
    item__heading: "dt",
    heading__content: "span",
    heading__icon: "span",
    item__content: "dd"
  }
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
