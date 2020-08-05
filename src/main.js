import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.prototype.$powerbi = window.powerbi
Vue.prototype.$powerbiModels = window['powerbi-client'].models

new Vue({
  // router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
