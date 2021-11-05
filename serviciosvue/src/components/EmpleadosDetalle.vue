<template>
    <div class="container">
        <h1>Empleados</h1>
        <select @change="cargarDetallesEmpleado" name="" id="">
            <option v-for="(empl, index) in empleados" :key="index"
            :value="empl.idEmpleado">
               {{empl.apellido}}
            </option>
        </select>

        <div v-if="empleadoDetalles!=null">
            <h1>Apellido: {{this.empleadoDetalles.apellido}}</h1>
            <h2>Oficio: {{this.empleadoDetalles.oficio}}</h2>
            <h3>Salario: {{this.empleadoDetalles.salario}}</h3>
            <h3>Departamento: {{this.empleadoDetalles.departamento}}</h3>
        </div>
    </div>
</template>

<script>
import Global from './../Global'
import axios from 'axios'
export default{
    name: "Empleados",
    data(){ 
    return {
        empleados: [],
        empleadoDetalles: null,
   }
   }
   ,
   mounted(){
       this.cargarEmpleados();
   },
   methods: {
       cargarEmpleados(){
           var request = "/api/Empleados";
           var url = Global.urlempleados + request;
           console.log(url)
           axios.get(url).then(res => {
              this.empleados = res.data;
             console.log(this.empleados)
       })
   },
   cargarDetallesEmpleado(idEmpl) {
       console.log(idEmpl.target.value);
       var idEmpleado = idEmpl.target.value;
       var request =  "/api/Empleados/"+idEmpleado;
       var url = Global.urlempleados + request;
           console.log(url)
           axios.get(url).then(res => {
              this.empleadoDetalles = res.data;
             console.log(this.empleadoDetalles)
       })
   }
}
}
</script>
