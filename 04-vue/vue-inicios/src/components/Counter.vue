
<template>

    <div class="d-flex align-items-center gap-4">
        <button v-bind:class="{ btn: true, active: false }" v-on:click="decrementar()" class="btn-primary">-</button>
        <span style="font-weight: 500;" class="h4">{{ counter }}</span>
        <button :class="{ btn: true }" @click="incrementar()" class="btn-primary">+</button>
    </div>
</template>

<script>
    // Las props son de solo lectura
    // Nota: Este objeto expone todas las propiedades a nuestra vista
    export default { // No usar funciones flechas
        //props: [ "initialCounter" ], // Forma sencilla de definir una prop
        props: { // forma más avanzada de definir una prop
            initialCounter: {
                required: true,
                type: Number,
                default: 10
            }
        },
        data(){
            return { // Definimos nuestras propiedades reactivas
                counter: this.initialCounter // por un prop
            }
        },
        methods: { // Definimos los métodos usados por nuestro componente
            incrementar(){
                // this.counter = this.counter + 1;
                // this.counter += 1;
                this.counter++;
            },
            decrementar: function() {
                this.counter--;
            }
        }
    }
</script>

<style>

</style>