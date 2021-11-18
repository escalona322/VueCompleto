<template>
<div>
    <h1>Jugadores equipo</h1>
    <router-link class="btn btn-success" 
        :to="'/equipos/'+idEquipo">Volver</router-link>
    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Detalles</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="jug in jugadores" :key="jug.idJugador">
                <td> {{jug.nombre}} </td>
                <td>
                    <img :src="jug.imagen" alt="" height="200px" width="175px"/>
                <td> <router-link class="btn btn-danger"
                    :to="'/detallesjugador/'+jug.idJugador"
                    >
                    Detalles
                </router-link> </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>

import ServicioChampions from './../services/ServiceChampions.js';

const service = new ServicioChampions();

export default {
    name: "JugadoresEquipos",
    data() {
        return {
            jugadores: {},
            idEquipo: 0,
        }
    },
    mounted() {       
      this.cargarJugadores()
    },
    methods: {
          cargarJugadores() {
            this.idEquipo = this.$route.params.idequipo;
            service.getJugadoresEquipo(this.idEquipo).then(result => {             
                this.jugadores = result;
                console.log(this.jugadores)
            })
        }
    }
}
</script>
