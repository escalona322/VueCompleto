import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import InsertarApuesta from './components/InsertarApuesta.vue'
import DetallesEquipo from './components/DetallesEquipo.vue'
import JugadoresEquipo from './components/JugadoresEquipo.vue'
import DetallesJugador from './components/DetallesJugador.vue'
import Apuestas from './components/Apuestas.vue'
import EliminarApuesta from './components/EliminarApuesta.vue'
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/home", component: Home},
  {path: "/equipos/:idequipo", component: DetallesEquipo},
  {path: "/jugadoresequipo/:idequipo", component: JugadoresEquipo},
  {path: "/detallesjugador/:idjugador", component: DetallesJugador},
  {path: "/apuestas", component: Apuestas},
  {path: "/eliminarapuesta/:idapuesta", component: EliminarApuesta},
  {path: "/insertarapuesta", component: InsertarApuesta},


]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
