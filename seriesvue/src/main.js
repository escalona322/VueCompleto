import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DetallesSerie from './components/DetallesSerie.vue'
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/serie/:idSerie", component: DetallesSerie},

]

const router = new VueRouter({
  routes,
  mode: "history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
