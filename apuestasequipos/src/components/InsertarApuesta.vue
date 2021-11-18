<template>
    <div>
        <form v-on:submit.prevent>
            <label>Usuario:</label>
             <input type="text" name="cajausuario"
            class="form-control" v-model="apuesta.usuario"/>
            <label>Real Madrid:</label>
            <input type="number" name="cajarm"
             class="form-control" v-model="res1"/>
          <label>Atletico del Madrid:</label>
          <input type="number" name="cajaam" 
          class="form-control" v-model="res2"/>
          <label>Fecha:</label>
          <input type="text" name="cajafecha"
           class="form-control" v-model="apuesta.fecha"/>

           <button class="btn btn-success" @click="insertarApuesta()">
              Insertar Apuesta
          </button>
</form>    
    </div>  
</template>

<script>

import ServicioChampions from './../services/ServiceChampions.js';

const service = new ServicioChampions();
export default {
    name: "InsertarApuesta",
    data() {
        return {
            res1: "",
            res2: "",
            apuesta: {
                idApuesta: 0,
                usuario: "",
                resultado: "",
                fecha: "",
            }
        }
    },methods: {
        insertarApuesta() {
        this.apuesta.resultado = this.res1+"-"+this.res2;
        service.insertarApuesta(this.apuesta).then(res => {
              console.log(res);
              this.$router.push("/apuestas");
          })
      }
    }
}
</script>
