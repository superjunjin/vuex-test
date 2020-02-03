import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 从根实例中注入，该store实例会注入到根组件下的所有子组件中。
  store,
  render: h => h(App)
}).$mount('#app')
