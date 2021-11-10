<template>
    <div>
        <h1>Detalles Departamento</h1>
        <router-link to="/departamentos" class="btn btn-warning">
            Volver al listado
        </router-link>
        <h2>
            {{departamento.nombre + ", " + departamento.localidad}}
        </h2>
    </div>
</template>

<script>


export default {
   name: "DetallesDepartamento",
   data() {
       return {
           departamento: {
               numero: 0,
               nombre: "",
               localidad: "",
           }
       }
   },
   mounted() {
       this.departamento.numero = this.$route.params.iddepartamento;
       this.departamento.nombre = this.$route.params.nombre;
       this.departamento.localidad = this.$route.params.localidad;
   }
}
</script>
