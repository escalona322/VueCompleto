import Global from "../Global";
import axios from "axios";

export default class ServicioDepartamentos {

    getDepartamentos(){
        return new Promise(function(resolve) {
            var request = "/api/Departamentos";
            var url = Global.urldepartamentos + request;
            var departamentos = {};
            axios.get(url).then(res => {
               departamentos = res.data;
               console.log(departamentos)
               resolve(departamentos);
        });
        
      });
    }

    insertarDepartamento(departamento){
        return new Promise(function(resolve) {
            var request = "/api/Departamentos";
            var url = Global.urldepartamentos + request;
            axios.post(url, departamento).then(res => {
           
               console.log("INSERTADO"+ res)
               resolve("Insertado!");
        });
        
      });
    }

    buscarDepartamento(id){
        return new Promise(function(resolve) {
            var request = "/api/Departamentos/"+id;
            var url = Global.urldepartamentos+request;

            axios.get(url).then(res => {
                var departamento = res.data;
               
                resolve(departamento);
            })
        })
    }

    eliminarDepartamento(id){
        return new Promise(function(resolve) {
            var request = "/api/Departamentos/"+id;
            var url = Global.urldepartamentos+request;

            axios.delete(url).then(res => {
                console.log(res);
                resolve("Eliminado");
            })
        })
    }

    modificarDepartamento(departamento){
        return new Promise(function(resolve) {
            var request = "/api/Departamentos";
            var url = Global.urldepartamentos + request;
            axios.put(url, departamento).then(res => {
           
               console.log("Modificado"+ res)
               resolve("Modificado!");
        });
        
      });
    }
}