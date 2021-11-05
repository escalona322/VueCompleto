<template>
    <div>
        <h1>La suma es: {{this.suma}}</h1>
        <button @click="insertarHijo">
            Insertar hijo
        </button>
        <div v-for="num in numeros" :key="num">
            <NumerosHijo :num="num"
             v-on:sumarNumeros="sumarNumeros"/> 
        </div>
       
    </div>

</template>

<script>
import NumerosHijo from './NumerosHijo.vue';
export default {
    name: "NumerosPadre",
    components: {
        NumerosHijo,
    },
    data(){
        return {
            numeros: [Math.floor(Math.random()*100),
             Math.floor(Math.random()*100)],
            suma: 0,
        }
    },
    methods: {
        sumarNumeros(numero){
            this.suma += numero;
        },
        insertarHijo(){
            var aleat = Math.floor(Math.random()*100);
            this.numeros.push(aleat);
        }
    }
}
</script>
