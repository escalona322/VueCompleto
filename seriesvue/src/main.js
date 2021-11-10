import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DetallesSerie from './components/DetallesSerie.vue'
import PersonajesSerie from './components/PersonajesSerie.vue'
import InsertarPersonaje from './components/InsertarPersonaje.vue'
import ModificarPersonaje from './components/ModificarPersonaje.vue'
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/serie/:idSerie", component: DetallesSerie},
  {path: "/personajes/:idSerie", component: PersonajesSerie},
  {path: "/insertarpersonaje", component: InsertarPersonaje},
  {path: "/modificarpersonaje", component: ModificarPersonaje},
]

const router = new VueRouter({
  routes,
  mode: "history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
