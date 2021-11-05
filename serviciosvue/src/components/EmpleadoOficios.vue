<template>
    <div class="container">
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
import Global from './../Global'
import axios from 'axios'
export default{
    name: "EmpleadosOficios",
    data(){ 
    return {
        oficios: [],
        empleadosOficio: {},
        empleadoDetalles: null,
   }
   }
   ,
   mounted(){
       this.cargarOficios();
   },
   methods: {
       cargarOficios(){
           var request = "/api/Empleados/oficios";
           var url = Global.urlempleados + request;
           console.log(url)
           axios.get(url).then(res => {
              this.oficios = res.data;
             console.log(this.empleados)
       })
   },
   cargarEmpleadosOficio(ofi) {
       console.log(ofi.target.value);
       var oficio = ofi.target.value;
       var request =  "/api/Empleados/EmpleadosOficio/"+oficio;
       var url = Global.urlempleados + request;
           console.log(url)
           axios.get(url).then(res => {
              this.empleadosOficio = res.data;
             console.log(this.empleadosOficio)
       })
   }
}
}
</script>
