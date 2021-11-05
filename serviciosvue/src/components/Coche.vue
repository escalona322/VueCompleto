<template>
    <div>
        <h1>
            Coches
        </h1>
        
        <div class="card"
            v-for="(coche, index) in coches" :key="index">
            <img :src="coche.imagen" class="card-img-top" 
            :title="coche.marca">
            <div class="card-body">
                <h5>{{coche.marca+ " " + coche.modelo}}</h5>
                <p>{{coche.conductor}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

var urlapicoches = "https://apicochespaco.azurewebsites.net";
export default {
   name: "Coche",
   data(){ 
    return {
        coches: []
   }
   }
   ,
   mounted(){
       this.cargarCoches();
   },
   methods: {
       cargarCoches(){
           var request = "/webresources/coches";
           var url = urlapicoches + request;
           axios.get(url).then(res => {
              this.coches = res.data;
              console.log(this.coches)
       })
   }
}
}
</script>
