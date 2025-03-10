<template>
    <h1>Product list</h1>

    <ul class="list-group">

        <li 
            class="list-group-item" 
            v-for="fruta in frutas" 
            :key="fruta"
        >
            {{ fruta }}
        </li>
        
    </ul>
</template>


<script>

// No necesito modificar esta listas => solo lectura
let data = ["Piña", "Manzana", "Pera", "Uva", "Fresa"];

export default {

    computed: {
        frutas(){
            return data;
        }
    }

}


</script>