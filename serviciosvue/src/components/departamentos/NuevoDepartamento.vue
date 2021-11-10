<template>
    <div>
        <h1>Nuevo Departamento</h1>

        <div style="width: 500px; margin: 0 auto">
            <form method="POST"
            v-on:submit.prevent="insertarDepartamento()">
                <div class="form-group">
                    <label>Número: </label>
                    <input v-model="departamento.numero" type="number" class="form-control">
                </div>
                 <div class="form-group">
                    <label>Nombre: </label>
                    <input v-model="departamento.nombre" type="text" class="form-control">
                </div>
                 <div class="form-group">
                    <label>Localidad: </label>
                    <input v-model="departamento.localidad" type="text" class="form-control">
                </div>
                <br/>
                <button class="btn btn-success">
                    Insertar departamento
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import ServicioDepartamentos from  '../../services/ServiceDepartamentos.js';

const service = new ServicioDepartamentos();
export default {
    name: "NuevoDepartamento",
    methods: {    
            insertarDepartamento () {
                console.log(this.departamento);
                this.departamento.numero = parseInt(this.departamento.numero);
                service.insertarDepartamento(this.departamento).then(res => {
                    console.log(res);
                    this.$router.push("/departamentos");
                })
            }
        
    },
    data() {
        return {
            departamento: {
                numero: 0,
                nombre: "",
                localidad: "",
            },
            mensaje: "",
        }
    }
}
</script>
