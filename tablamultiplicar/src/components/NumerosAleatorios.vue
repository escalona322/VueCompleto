<template>
    <div>
         <nav>
            <ul>             
                <li v-for="num in valores" :key="num">
                    <router-link :to="'/numerotriple/' + num">
                    NumeroTriple {{num}}/ </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>


export default{
  name: "NumerosAleatorios"
  ,data(){
    return {
      valores: [         
      ],
      }
  },mounted(){
      for(var i=0; i<=10; i++){
          this.valores[i] = (Math.floor(Math.random()*100))
      }
      console.log(this.valores)
  }
}
</script>
