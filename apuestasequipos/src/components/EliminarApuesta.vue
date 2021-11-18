<template>
    <div>
    <h1>Quieres eliminar la apuesta {{idApuesta}} </h1>

    <button class="btn btn-success"
    @click="eliminarApuesta()"
    >
        Confirmar
    </button>
    <router-link class="btn btn-danger"
    to="/apuestas"
    >
        Volver
    </router-link>
</div> 
</template>

<script>

import ServicioChampions from './../services/ServiceChampions.js';

const service = new ServicioChampions();
export default {
    name: "EliminarApuesta",
     data() {
        return {
            idApuesta: 0,
        }
    },
    mounted() {       
      this.idApuesta = this.$route.params.idapuesta;
    },
    methods: {
          eliminarApuesta() {
            service.deleteApuestas(this.idApuesta).then(result => {             
                console.log(result)
                this.$router.push("/apuestas");
            })
        }
    }
}
</script>
