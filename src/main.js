import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'
import veeValidate from 'vee-validate'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(veeValidate)
new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')
