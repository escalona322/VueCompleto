<template>
    <div>
        <h1>Ejemplo comics objetos padre/hijo</h1>
        <div>
          <!-- Con .prevent evito q el formulario recargue la pagina
          al enviar los datos -->
        <form v-on:submit.prevent="nuevoComic()">
         <label for="">Titulo</label>
         <input type="text"  v-model="seleccionado.titulo"> <br/>
         <label for="">Imagen</label>
         <input type="text" v-model="seleccionado.imagen"> <br/>
         <label for="">Descripcion</label>
         <input type="text" v-model="seleccionado.descripcion"> <br/>
         <label for="">Año</label>
         <input type="text" v-model="seleccionado.año"> <br/>
         <button> Nuevo Comic </button>
        </form>
          <hr/>
            <h2>Favorito</h2>
            <h2 style="color:blue">{{this.favorito.titulo}}</h2>
            <img :src="this.favorito.imagen" height="230px" width="195px"/>
            <p>{{this.favorito.descripcion}}</p>
        </div>
        <hr/>
        <div v-for="com in comics" :key="com.titulo">
            <ComicsHijo :comic="com"
            v-on:selecFavorito="selecFavorito"
            v-on:eliminarComic="eliminarComic"
            v-on:editarComic="editarComic"/>
        </div>
    </div>
</template>

<script>
import ComicsHijo from './ComicsHijo.vue'
export default {
  name: "ComicsPadre",
  components: {
      ComicsHijo,
  },data(){
      return {
          comics: [
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña",
              año: 2000
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno",
              año: 1983
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              descripcion: "Yo soy Groot",
              año: 2002
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores",
              año: 2005
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons",
              año: 1998
            },
            {
              titulo: "Batman",
              imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
              descripcion: "Murcielago",
              año: 1897
            }
      ], favorito: "", 
      seleccionado: {
        titulo: "",
        imagen:"",
        descripcion: "",
        año: 0
      },
      }
  }, methods: {
      selecFavorito (comic) {
          console.log("en selecfavorito")
          this.favorito = comic;
      },
      eliminarComic (comic) {
        console.log("dentro de delete padre")
        this.comics.splice(this.comics.indexOf(comic), 1);
      },
      editarComic (comic) {       
        console.log("dentro de editarComic padre")
        var index = this.comics.indexOf(comic);
        console.log(index)
        this.comics[index] = this.seleccionado;
        this.seleccionado = {
        titulo: "",
        imagen:"",
        descripcion: "",
        año: 0
      }
      },
      nuevoComic () {
        this.comics.push(this.seleccionado);
        this.seleccionado = {
        titulo: "",
        imagen:"",
        descripcion: "",
        año: 0
      }
      }
  }
}
</script>
