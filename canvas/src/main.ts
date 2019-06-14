import Vue from 'vue';
import App from './App.vue';

import VConsole from "vconsole";

new (VConsole as any)()

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');


export const Base64 = {
  encode(string: any) {
    return window.btoa(unescape(encodeURIComponent(JSON.stringify(string))))
  },
  decode(string: any) {
    return decodeURIComponent(escape(window.atob(string)));
  }
}
