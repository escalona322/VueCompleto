import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TablaMultiplicar from './components/TablaMultiplicar.vue'
import Home from './components/Home.vue'
import Deportes from './components/Deportes.vue'
import NumerosPadre from './components/NumerosPadre.vue'
import ComicsPadre from './components/ComicsPadre.vue'
import NumeroDoble from './components/NumeroDoble.vue'
import NumeroTriple from './components/NumeroTriple.vue'
Vue.config.productionTip = false

Vue.use(VueRouter);

//SE HACE UN ARRAY CON TODAS LAS RUTAS DEL SERVIDOR
const routes = [
  {path: "/home", component: Home},
  {path: "/tablamultiplicar", component: TablaMultiplicar},
  {path: "/", component: Home},
  {path: "/deportes", component: Deportes},
  {path: "/numerospadre", component: NumerosPadre},
  {path: "/comicspadre", component: ComicsPadre},
  {path: "/numerodoble/:num?", component: NumeroDoble},
  {path: "/numerotriple/:num?", component: NumeroTriple},
]

const router = new VueRouter({
  routes,
  mode: "history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
