<template>
<div>
    <h1> {{jugador.nombre}} </h1>
    <img :src="jugador.imagen">
    <h2> {{jugador.posicion}} </h2>
    <h3> Fecha de nacimiento: {{jugador.fechaNacimiento}} </h3>
    <h4> Pais: {{jugador.pais}} </h4>
    <router-link
    :to="'/jugadoresequipo/'+jugador.idEquipo"
    class="btn btn-info"
    >
        Volver
    </router-link>
</div>
    
</template>

<script>

import ServicioChampions from './../services/ServiceChampions.js';

const service = new ServicioChampions();
export default {
    name: "DetallesJugador",
     data() {
        return {
            jugador: {},
            idJugador: 0,
        }
    },
    mounted() {       
      this.cargarJugador()
    },
    methods: {
          cargarJugador() {
            this.idJugador = this.$route.params.idjugador;
            service.getJugadorId(this.idJugador).then(result => {             
                this.jugador = result;
                console.log(this.jugador)
            })
        }
    }
}
</script>
