<template>
<div>
    <h1>Servicio Empleados</h1>

       <h1>Oficios</h1>
        <select @change="cargarEmpleadosOficio" name="" id="">
            <option v-for="(ofi, index) in oficios" :key="index"
            :value="ofi">
               {{ofi}}
            </option>
        </select>
    
        <div v-for="(empl, index) in empleadosOficio" :key="index">
            <h1>Apellido: {{empl.apellido}}</h1>
            <h2>Oficio: {{empl.oficio}}</h2>
            <h3>Salario: {{empl.salario}}</h3>
            <h3>Departamento: {{empl.departamento}}</h3>
            <hr/>
        </div>

    </div> 
</template>

<script>
import ServicioEmpleados from './../services/ServicioEmpleados.js';

const service = new ServicioEmpleados();
export default {
    name: "ServicioEmpleados",
    data(){
        return {
            empleadosOficio: {},
            oficios: {},
        }
    },
    methods: {
        cargarOficios(){
            service.getOficios().then(result => {
            this.oficios=result;
        })
        },
        cargarEmpleadosOficio(ofi) {
            var oficio = ofi.target.value;
            service.getEmpleadosOficios(oficio).then(result => {
            this.empleadosOficio=result;
        })
        }
    },mounted() {
        this.cargarOficios();
    }
}
</script>
