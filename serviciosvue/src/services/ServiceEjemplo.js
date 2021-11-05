import Global from './../Global';
import axios from 'axios';
export default class ServiceEjemplo {
    getSaludo(nombre) {
        return "Welcome to my service," + nombre;
    }

    getPromesa = new Promise(function(resolve, reject){
        var num = 0;
        if(num == 0){
            resolve("ok");
        }else{
            reject("error");
        }
    })

    getPromesaSimple = new Promise(function(resolve){
     
            resolve("ok");
     
    })

    getEmpleado(idempleado){
        return new Promise(function(resolve) {
            var request = "/api/empleados/"+idempleado;
            var url = Global.urlempleados + request;
            var empleado = {
                apellido: "Ahora"
            };
            axios.get(url).then(res => {
               empleado = res.data;
               console.log(empleado)
               resolve(empleado);
        });
        
      });
    }
    

} 