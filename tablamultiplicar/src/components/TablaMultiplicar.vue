<template>
    <div class="container">
        <h1>Tabla de multiplicar</h1>
        <label for="">Introduzca un numero</label>
        <input type="number" v-model="numero"/> <br/><br/>
        <button class="btn btn-info" @click="multiplicar()">
            Mostrar tabla
        </button> <br/>
         <hr/>
        <table class="table" border="1px">
            <thead>
                <th>Operacion</th>
                <th>Resultado</th>
            </thead>
            <tbody v-for="num in resultado" :key="num" v-html="num">
                {{num}}
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
   name: "TablaMultiplicar",
   methods: {
       multiplicar() {
           this.resultado = [];
          for(var i=1; i<=10; i++){
              var numentabla = "<tr><td>"+this.numero+"*"+i+"</td>"+
              "<td>"+this.numero*i+"</td></tr>"         
              this.resultado.push(numentabla);
          }    }   },
   data () {
       return {
           numero: 0,
           resultado: [],
       }}}
</script>

<style scoped>
table {
    margin-right: auto;
    margin-left: auto;
}
</style>
