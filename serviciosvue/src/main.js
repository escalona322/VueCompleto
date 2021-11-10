import Vue from 'vue'
import App from './App.vue'
import Coche from './components/Coche.vue'
import EmpleadosDetalle from './components/EmpleadosDetalle.vue'
import VueRouter from 'vue-router'
import EmpleadosOficios from './components/EmpleadoOficios.vue'
import EjemploServicios from './components/EjemploServicios.vue'
import ServicioEmpleados from './components/ServicioEmpleados'
import EjemploDepartamentos from './components/departamentos/DepartamentosIndex.vue'
import NuevoDepartamento from './components/departamentos/NuevoDepartamento.vue'
import DetallesDepartamento from './components/departamentos/DetallesDepartamento.vue'
import ModificarDepartamento from './components/departamentos/ModificarDepartamento.vue'
import EliminarDepartamento from './components/departamentos/EliminarDepartamento.vue'
Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
  {path: "/coches", component: Coche},
  {path: "/empleadosdetalle", component: EmpleadosDetalle},
  {path: "/empleadosoficio", component: EmpleadosOficios},
  {path: "/ejemploservicios", component: EjemploServicios},
  {path: "/servicioempleados", component: ServicioEmpleados},
  {path: "/departamentos", component: EjemploDepartamentos},
  {path: "/nuevodepartamento", component: NuevoDepartamento},
  {path: "/detallesdepartamento/:iddepartamento/:nombre/:localidad", 
  component: DetallesDepartamento},
  {path: "/modificardepartamento/:iddepartamento",
   component: ModificarDepartamento},
   {path: "/eliminardepartamento/:iddepartamento", 
   component: EliminarDepartamento},
  
]

const router = new VueRouter({
  routes,
  mode: "history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
