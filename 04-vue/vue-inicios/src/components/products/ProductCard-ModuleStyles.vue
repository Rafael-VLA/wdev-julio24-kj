<template>
    <h1 :class="getStyles['product-title-border']">Product card</h1>
</template>

<script>
// Las clases se guardan en un objeto 
import styles from './product.module.css'

//Nota: Los estilos de módulos evitan el  nombre de clases
// duplicadas

export default {

    computed: {
        getStyles(){
            return styles;
        }
    }

}
</script>