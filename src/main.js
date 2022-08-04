import Vue from 'vue'
import App from './App.vue'
import ElegentButton from './components/ElegentButton.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export {ElegentButton};