<template>
    <!-- v-if v-else -->
    <!-- <h1 v-show="showMessage">Hola, Rafael</h1> usa la propiedad de css display para esconder el elemento -->
    <h1 v-if="showMessage">Hola, Rafael</h1>
    <!-- <h1 v-else>Adiós, Rafael</h1> -->

    <button @click="setShowMessage()" class="btn btn-primary">
        {{ btnText }}
    </button>
</template>

<script>
// showMessage => definir propiedad reactiva con valor booleano (true o false) y mostrarlo en la vista
// Cuando el valor sea true mostrar texto de "Esconder el saludo" y cuando sea false "Mostrar saludo" en el botón

export default {
    data() {
        return {
            showMessage: true,
            numRandom: 3
        }
    },
    methods: {
        setShowMessage(){
            this.showMessage = !this.showMessage; // !false = true
        }

        // btnText() {// Cada vez que exista un renderizado, se ejecuta el método
        //     console.log("Recalculando")
        //     return this.showMessage === true ? "Esconder el saludo" : "Mostrar saludo"
        // }
    },
    computed: {
        // funciones
        btnText() {// simular los gets de una clase de typescript
            console.log("Uso propiedad computada")
            return this.showMessage === true ? "Esconder el saludo" : "Mostrar saludo"
        }
    }
}
</script>