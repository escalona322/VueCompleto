<template>
    <div>
        <h1>Personajes Serie</h1>
        <router-link class="btn btn-warning" :to="'/serie/'+this.idSerie">
            Volver
        </router-link>
        <table>
            <thead>
                <th>Personaje</th>
                <th>Imagen</th>
            </thead>
            <tbody>
                <tr v-for="pj in personajes" :key="pj.idPersonaje">
                    <td>{{pj.nombre}}</td>
                    <td><img height="200px" width="175px" :src="pj.imagen"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServicioSeries from './../services/ServiceSeries.js';

const service = new ServicioSeries();
export default {
 name: "PersonajesSerie",
 data() {
     return {
         idSerie: 0,
         personajes: {},
     }
 },
 methods: { 
     cargarPersonajesSerie () {
          service.getPersonajesSerie(this.idSerie).then(result => {
                this.personajes = result;
                console.log(this.personajes)
            })
      }
 },
 mounted() {
     this.idSerie = this.$route.params.idSerie;
     this.cargarPersonajesSerie()
 }
}
</script>
