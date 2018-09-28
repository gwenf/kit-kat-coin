import Vue from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: h => h(App),
}).$mount('#app')
