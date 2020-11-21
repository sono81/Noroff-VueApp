import Vue from 'vue'
import App from './App.vue'
import Recipes from './components/Recipes.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  Recipes
}).$mount('#app')
