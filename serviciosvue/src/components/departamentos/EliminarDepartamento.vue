<template>
    <div>
        <h1>Eliminar Departamento</h1>
        <button class="btn btn-info" @click="volver()">Volver</button>
    </div>
</template>

<script>
import ServicioDepartamentos from  '../../services/ServiceDepartamentos.js';

const service = new ServicioDepartamentos();
export default {
   name: "EliminarDepartamento",
   data() {
       return {
           id: 0,
       }
   },
   mounted() {
       this.id = this.$route.params.iddepartamento;
       this.deleteDepartamento();
        

   },
   methods: {

       deleteDepartamento () {
           service.eliminarDepartamento(this.id).then(result => {
               console.log(result);
           })
       },
       volver() {
           this.$router.push("/departamentos");
       }

   }
}
</script>
