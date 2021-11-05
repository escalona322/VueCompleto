<template>
    <div>
        <h1>
            Ejemplo Servicios Api
        </h1>
        <h2>{{saludo}}</h2>
        <h1 v-if="empleado">
            {{empleado.apellido}}
        </h1>
        <h1 v-else>
            No hay empleado con ese id
        </h1>
    </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo';

const service = new ServiceEjemplo();
export default{
    name: "EjemploServicios",
    data() {
        return {
            saludo: "",
            empleado: {}
        }
    }, mounted() {
        this.saludo = service.getSaludo("Power ranger verde lol");

        service.getEmpleado(7521).then(result => {
            this.empleado = result;
        });

        service.getPromesa.then(result => {
            this.saludo = result;
        })
   }


}
</script>
