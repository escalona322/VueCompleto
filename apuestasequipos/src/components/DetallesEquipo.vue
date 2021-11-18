<template>
    <div>
    <h1> {{equipo.nombre}} </h1>
    <img :src="equipo.imagen" alt="" height="370px" width="320px">
    <h2> Champions: {{equipo.champions}} </h2>
    <p>
        {{equipo.descripcion}}
    </p>
    <router-link class="btn btn-success" 
        to="/home">Volver</router-link>
    <router-link class="btn btn-warning" 
        :to="'/jugadoresequipo/'+equipo.idEquipo">Jugadores</router-link>
</div>  
</template>

<script>

import ServicioChampions from './../services/ServiceChampions.js';

const service = new ServicioChampions();
export default {
    name: "DetallesEquipo",
     data() {
        return {
            equipo: {},
            idEquipo: 0,
        }
    },
    mounted() {       
      this.cargarEquipo()
    },
    methods: {
          cargarEquipo() {
            this.idEquipo = this.$route.params.idequipo;
            service.getEquipoId(this.idEquipo).then(result => {             
                this.equipo = result;
                console.log(this.equipo)
            })
        }
    },watch: {
        '$route.params.idequipo'(next, prev){
            if(next != prev){
                this.cargarEquipo();
            }
        }
    }
}
</script>
