
<template>
    <div>
        <h1>Deportes</h1>
        <h2>Favorito: {{favorito}}</h2>
        <ul>
            <li v-for="depor in deportes" :key="depor">
                <Deporte :depor="depor"
                 v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Deporte from './Deporte.vue';

export default {
    name:"Deportes",
    components: {
        Deporte,
    },
    data() {
        return {
            deportes: ["Canicas", "Surf", "Tenis", "Basket", "Futbol"],
            favorito: ""
       }
    },
    methods: {
      seleccionarFavoritoParent(deporte){
          console.log(deporte);
          this.favorito = deporte;
      }
  }
}
</script>
