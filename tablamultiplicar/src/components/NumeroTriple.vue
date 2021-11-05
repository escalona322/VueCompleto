<template>
    <div>
        <h1>Numero triple</h1>
        <h2 v-if="mensaje">
            {{mensaje}}
        </h2>
        <h2>Numero recibido: {{num}}</h2>
        <h2>Numero triple: {{triple}}</h2>

    </div>
</template>

<script>

export default {
   name: "NumeroTriple",
   data () {
       return {
           num: 0,
           triple: 0,
           mensaje: null
       }
   },methods: {    
       asignarValores(){
           this.num = this.$route.params.num;
           this.triple = this.num*3
           console.log(this.num)
       }

   },watch: {
       '$route.params.num'(next, prev){
           if(next != prev){
               this.asignarValores();
           }
       }
   },mounted() {
       this.asignarValores();
   }
}
</script>
