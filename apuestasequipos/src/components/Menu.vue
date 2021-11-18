<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
     <div class="container-fluid">
         <span class="navbar-brand" href="#">Series</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
    </button>

     <div class="collapse navbar-collapse" id="navbarsExample03">
         <ul class="navbar-nav me-auto mb-2 mb-sm-0">
         <li class="nav-item">
         <router-link class="nav-link active" aria-current="page" 
         to="/home">Home</router-link>
      </li>
   <li class="nav-item">
        <router-link class="nav-link" 
        to="/apuestas">Apuestas</router-link>
    </li>

    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Equipos</a>
         <ul id="dropdown" class="dropdown-menu"
          aria-labelledby="dropdown03">
            <li v-for="equipo in equipos" :key="equipo.idEquipo">
                <router-link class="dropdown-item" 
             :to="'/equipos/'+equipo.idEquipo">
             {{equipo.nombre}}
             </router-link></li> 
         </ul>
    </li>
    </ul>

    </div>
    </div>
    </nav>
</template>

<script>
import ServicioChampions from './../services/ServiceChampions.js';

const service = new ServicioChampions();
export default {
    name: "Menu",
    data() {
        return {
            equipos: {},
        }
    },
    mounted() {
        this.cargarEquipos()
    },
    methods: {
          cargarEquipos() {
            service.getEquipos().then(result => {             
                this.equipos = result;
                console.log(this.equipos)
            })
        }
    }
}
</script>
