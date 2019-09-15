import Vue from "vue";
import App from './App.vue';

Vue.config.productionTip = false;
import "./styles/_reboot.scss";
// import * as fundebug from "fundebug-javascript";
// import fundebugVue from "fundebug-vue";
// fundebug.apikey = "c06952f4c30933cfeb4594aac4db636d1eca43e33472b3dcca29a9fda1a0a9db"
// fundebugVue(fundebug, Vue);

// import "fundebug-revideo"

window.onerror = function(message, source, line, column, error) {
    console.log('ONE ERROR HANDLER TO RULE THEM ALL:', message);
}


// let number :number = 0;
// number = '123'

new Vue({
    render: (h) => h(App)
}).$mount('#app');