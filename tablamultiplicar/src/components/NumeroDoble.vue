<template>
    <div>
        <button @click="redirectToHome">Ir a home</button>
        <h1>Numero doble</h1>
        <h2 v-if="mensaje">
            {{mensaje}}
        </h2>
        <h2>Numero recibido: {{num}}</h2>
        <h2>Numero doble: {{doble}}</h2>

    </div>
</template>

<script>

export default {
   name: "NumeroDoble",
   data () {
       return {
           num: 0,
           doble: 0,
           mensaje: null
       }
   },methods: {
       redirectToHome (){
           this.$router.push("/")
       },
       
       mostrarDoble(){
           this.num = this.$route.params.num;
           this.doble = this.num*2
       }

   },watch: {
       '$route.params.num'(next, prev){
           console.log("next"+next);
           console.log("prev"+prev);
           if(next != prev){
               this.mostrarDoble();
           }
       }
   },mounted() {
       if(this.$route.params.num == null){
           this.mensaje = "No se han enviado parametros"
       }else{
          this.num = this.$route.params.num;
          this.doble = this.num*2;
       }
   }
}
</script>
