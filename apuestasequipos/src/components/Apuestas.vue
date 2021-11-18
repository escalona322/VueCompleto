<template>
    <div>
    <router-link class="btn btn-danger" 
    to="/insertarapuesta"
    >Realizar apuesta</router-link>
    <div v-for="equipo in equipos" :key="equipo.idEquipo">
        <h3 style="color:red" v-if="equipo.idEquipo==3">
            Local: {{equipo.nombre}} 
        </h3>
        <h3 style="color:red" v-if="equipo.idEquipo==4">
            Visitante: {{equipo.nombre}} 
        </h3>
    </div>
    
    <table class="table">
        <thead>
            <th>Usuario</th>
            <th>Resultado</th>
            <th>Fecha</th>
            <th>Acciones</th>
        </thead>
        <tbody>
            <tr v-for="apuesta in apuestas" :key="apuesta.idApuesta">
                <td> {{apuesta.usuario}} </td>
                <td> {{apuesta.resultado}} </td>
                <td> {{apuesta.fecha}} </td>
                <td> <router-link class="btn btn-danger"
                    :to="'/eliminarapuesta/'+ apuesta.idApuesta"
                    >
                    Eliminar
                </router-link> </td>
            </tr>
        </tbody>
    </table>
</div>
 
</template>

<script>
import ServicioChampions from './../services/ServiceChampions.js';

const service = new ServicioChampions();

export default {
    name: "Apuestas",
     data() {
        return {
            equipos: {},
            apuestas: {},
            idEquipo: 0,
        }
    },
    mounted() {
        this.cargarApuestas(),
        this.cargarEquipos()
    },
    methods: {
          cargarApuestas() {
            service.getApuestas().then(result => {             
                this.apuestas = result;
                console.log(this.apuestas)
            })
        },
        cargarEquipos() {
            service.getEquipos().then(result => {             
                this.equipos = result;
                console.log(this.equipos)
            })
        }
    }
}
</script>
