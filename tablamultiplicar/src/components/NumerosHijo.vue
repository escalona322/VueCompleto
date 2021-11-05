<template>
    <div>
        <h1>Numero hijo: {{this.num}}</h1>
        <button @click="mandarNum">
            Sumar: {{this.num}}
        </button>
    </div>
</template>

<script>

export default {
    name: "NumerosHijo",
    props: ["num"],
    methods: {
        mandarNum() {
            
            this.$emit("sumarNumeros", this.num);
        }
    }
}
</script>
