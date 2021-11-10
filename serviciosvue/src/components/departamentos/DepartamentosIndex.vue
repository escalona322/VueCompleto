<template>
    <div>
        <h1>
            Servicio Departamentos
        </h1>
        <div>
            <router-link to="/nuevodepartamento" class="btn btn-info">
                Nuevo Departamento 
            </router-link>
        </div>
        <table class="table table-primary">
            <thead>
                <th>Numero</th>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Acciones</th>
            </thead>
            <tr v-for="dept in departamentos" :key="dept.numero">
                <td>{{dept.numero}}</td>
                <td>{{dept.nombre}}</td>
                <td>{{dept.localidad}}</td>
                <td>
                    <router-link
                 :to="'/detallesdepartamento/'+dept.numero+'/'+dept.nombre+'/'+dept.localidad"
                     class="btn btn-info">
                         Detalles
                     </router-link>
                     <router-link
                 :to="'/modificardepartamento/'+dept.numero"
                     class="btn btn-warning">
                         Modificar
                     </router-link>
                     <router-link
                 :to="'/eliminardepartamento/'+dept.numero"
                     class="btn btn-danger">
                         Eliminar
                     </router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import ServicioDepartamentos from  '../../services/ServiceDepartamentos.js';

const service = new ServicioDepartamentos();
export default{
    name: "EjemploDepartamentos",
    data() {
       return{
        departamentos: {}
        }
    },
    mounted() {
        service.getDepartamentos().then(result => {
            this.departamentos = result;
        })
    }
}
</script>
