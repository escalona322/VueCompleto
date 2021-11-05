import Global from "../Global";
import axios from "axios";

export default class ServicioEmpleados {

    getOficios(){
        return new Promise(function(resolve) {
            var request = "/api/Empleados/oficios";
            var url = Global.urlempleados + request;
            var oficios = {};
            axios.get(url).then(res => {
               oficios = res.data;
               console.log(oficios)
               resolve(oficios);
        });
        
      });
    }

    getEmpleadosOficios(oficio){
        return new Promise(function(resolve) {
            
            var request =  "/api/Empleados/EmpleadosOficio/"+oficio;
            var url = Global.urlempleados + request;
            var empleadosOficio = {};
         
           axios.get(url).then(res => {
             empleadosOficio = res.data;
             console.log(empleadosOficio)
             resolve(empleadosOficio);
        })
    })
}
}