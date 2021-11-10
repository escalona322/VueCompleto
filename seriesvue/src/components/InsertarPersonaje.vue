<template>
    <div>
        <h1>Insertar Personaje</h1>
        <div className="form-group row">
            <label>
                Nombre
            </label>
            <input type="text"
            id="cajanombre" v-model="personaje.nombre"/>
        </div>
        <div className="form-group row">
            <label>
                Serie
            </label>
            <select id="selectseries" @change="cargarValueIdSerie($event)">
                <option v-for="ser in series" :key="ser.idSerie" :value="ser.idSerie">
                        {{ser.nombre}}
                    </option>
            </select>
           
        </div>
        <div className="form-group row">
            <label>
                Imagen
            </label>
            <input type="text"
            id="cajaimg" v-model="personaje.imagen"/>
        </div>

        <button class="btn btn-warning" @click="insertarPersonaje()">
          Insertar Personaje
        </button>
    </div>   
</template>

<script>
import ServicioSeries from './../services/ServiceSeries.js';

const service = new ServicioSeries();
export default {
  name:"InsertarPersonaje",
  data() {
    return {
      series: {},
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 1,
      }
    }
  },
  methods: {
      cargarSeries() {
            service.getSeries().then(result => {             
                this.series = result;
            })
        },
      cargarValueIdSerie(event) {
        this.personaje.idSerie = event.target.value;
      },
      insertarPersonaje() {
        this.personaje.idSerie = parseInt(this.personaje.idSerie)
        service.insertarPersonaje(this.personaje).then(res => {
              console.log(res);
              this.$router.push("/personajes/"+this.personaje.idSerie);
          })
      }
  },
  mounted() {
          this.cargarSeries();
  }
}
</script>
