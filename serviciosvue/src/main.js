import Vue from 'vue'
import App from './App.vue'
import Coche from './components/Coche.vue'
import EmpleadosDetalle from './components/EmpleadosDetalle.vue'
import VueRouter from 'vue-router'
import EmpleadosOficios from './components/EmpleadoOficios.vue'
import EjemploServicios from './components/EjemploServicios.vue'
import ServicioEmpleados from './components/ServicioEmpleados'
Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
  {path: "/coches", component: Coche},
  {path: "/empleadosdetalle", component: EmpleadosDetalle},
  {path: "/empleadosoficio", component: EmpleadosOficios},
  {path: "/ejemploservicios", component: EjemploServicios},
  {path: "/servicioempleados", component: ServicioEmpleados},
]

const router = new VueRouter({
  routes,
  mode: "history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
