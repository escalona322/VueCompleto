<template>
    <div>
        <h1>Modificar Departamento</h1>

        <div style="width: 500px; margin: 0 auto"
        v-if="departamento">
            <form method="POST"
            v-on:submit.prevent="updateDepartamento()">
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
                    Modificar departamento
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import ServicioDepartamentos from  '../../services/ServiceDepartamentos.js';

const service = new ServicioDepartamentos();
export default {
    name: "ModificarDepartamento",
    data() {
        return {
            id: 0,
             departamento: null,
        }
    },
    mounted() {
        this.id = this.$route.params.iddepartamento;
        this.cargarDepartamento();
        
    },
    methods: {
       cargarDepartamento() {
           service.buscarDepartamento(this.id).then(result => {
               this.departamento = result;
               
           })
        },

        updateDepartamento() {
            this.departamento.numero = parseInt(this.departamento.numero);
            service.modificarDepartamento(this.departamento).then(result => {
           console.log(result);
           this.$router.push("/departamentos");
            });
        }

    }
}
</script>
