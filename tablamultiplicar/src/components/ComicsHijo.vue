<template>
    <div>
        <button @click="mandarFavorito">
            Favorito
        </button>
        <button @click="modificarComic">
            Modificar Comic
        </button>
        <button @click="borrarComic">
            Eliminar comic
        </button>
        <h2 style="color:blue">{{this.comic.titulo}}</h2>
        <img :src="this.comic.imagen" height="230px" width="195px"/>
        <p>{{this.comic.descripcion}}</p>
        <p :class="{
            rojo: comic.año<2000,
            verde: comic.año>=2000,
            }">Año: {{this.comic.año}}</p>
        <hr/>
    </div>
</template>

<script>
export default {
  name: "ComicsHijo",
  props: ["comic"],
  methods:{ 
    mandarFavorito(){
        this.$emit("selecFavorito", this.comic);
    },
    borrarComic(){
        this.$emit("eliminarComic", this.comic);
    },
    modificarComic() {
        console.log("dentro de modificar hijo")
        this.$emit("editarComic", this.comic);
    }

  }
}
</script>

<style scoped>
@import './../assets/css/estiloscomics.css';
</style>