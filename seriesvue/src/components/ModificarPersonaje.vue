<template>
    <div>
        <h1>Modificar Personaje</h1>
        
            <div class="form-group row">
                <label>
                    Seleccione una serie
                </label>
                <select id="selectseries" @change="cargarSerieSeleccionado($event)">
                    <option v-for="ser in series" :key="ser.idSerie" :value="ser.idSerie">
                        {{ser.nombre}}
                    </option>
                </select>
            </div>
            <div class="form-group row">
                <label>
                    Seleccione un personaje
                </label>
                <select id="selectpersonajes" @change="cargarPjSeleccionado($event)">
                    <option v-for="pj in personajes" :key="pj.idPersonaje" :value="pj.idPersonaje">
                        {{pj.nombre}}
                    </option>
                </select>
            </div>
            <button @click="modificarPersonajes()" class="btn btn-info">
                Modificar Personaje
            </button>
    </div>
</template>

<script>
import ServicioSeries from './../services/ServiceSeries.js';

const service = new ServicioSeries();
export default {
  name:"ModificarPersonaje",
  data() {
      return {
          series: {},
          personajes: {},
          pjseleccionado: 1,
          serseleccionado: 1,
      }
  },
    methods: {
       cargarSeries() {
            service.getSeries().then(result => {             
                this.series = result;
            })
        },

         cargarPersonajes() {
            service.getPersonajes().then(result => {             
                this.personajes = result;
            })
        },
        cargarPjSeleccionado(event) {
            console.log(event.target.value);
            this.pjseleccionado = event.target.value;
        },
        cargarSerieSeleccionado(event) {
            console.log(event.target.value);
            this.serseleccionado = event.target.value;
        },
        modificarPersonajes() {
            service.modificarPersonajes(this.serseleccionado, this.pjseleccionado).then(result => {             
                console.log(result);
            })
        },
  },
  mounted() {
      this.cargarSeries();
      this.cargarPersonajes();
  }
}
</script>
