<template>
    <div>
        <h1>
            Detalles Serie
        </h1>
        <div class="container">
            <img :src="serie.imagen" height="280px" width="230px">
            <h2>{{serie.nombre}}</h2>
            <h3>IMBD: {{serie.puntuacion}}</h3>
            <router-link :to="'/personajes/'+serie.idSerie" class="btn btn-info">
                Personajes
            </router-link>
        </div>
    </div>
</template>

<script>
import ServicioSeries from './../services/ServiceSeries.js';

const service = new ServicioSeries();
export default{
  name: "DetallesSerie",
  data() {
      return {
          id: 0,
          serie: {}
      }
  },
  mounted() {
      this.id = this.$route.params.idSerie;
      this.cargarDetallesSerie();
  },
  methods: {
      cargarDetallesSerie () {
          service.getSerieById(this.id).then(result => {
                this.serie = result;
            })
      }
  }
}
</script>
