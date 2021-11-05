<template>
    <div>
        <nav>
            <ul id="menu">
                <li>
                    <router-link to="/home">Home/ </router-link>
                </li>
                <li>
                    <router-link to="/tablamultiplicar">Tabla Multiplicar/ </router-link>
                </li>
                <li>
                    <router-link to="/deportes">Deportes/ </router-link>
                </li>
               <li>
                    <router-link to="/numerospadre">Num Padre/ </router-link>
                </li>
                <li>
                    <router-link to="/comicspadre">Comics/ </router-link>
                </li>
                <li v-for="num in valores" :key="num">
                    <router-link :to="'/numerodoble/' + num">NumeroDoble {{num}}/ </router-link>
                </li>
                <li>
                    <router-link to="/numerodoble">NumeroDoblesinparam/ </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>


export default {
    name: "Menu",
    data(){
        return {
            valores: [23, 34, 67],
        }
    }
}
</script>

<style scoped>
    ul#menu li{
        display: inline
    }
</style>
