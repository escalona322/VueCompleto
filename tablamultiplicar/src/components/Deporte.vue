<template>
    <div>
        <span class="px-4">{{this.depor}}</span>
        <button class="btn btn-info" 
        @click="seleccionarFavorito(depor)">
             Favorito
        </button>
        <br/>
    </div>
</template>

<script>

export default {
  name: "Deporte",
  props: ["depor"],
  mounted() {
      console.log(this.deporte);
  },
  data() {
      return {
          favorito:""
      }
  },
  methods: {
      seleccionarFavorito(depor){
          this.favorito = this.depor;
          this.$emit("seleccionarFavoritoParent", depor);
      }
  }
}
</script>
