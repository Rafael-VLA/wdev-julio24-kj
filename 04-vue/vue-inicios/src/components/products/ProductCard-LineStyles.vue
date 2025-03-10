<template>
    <h1 :style="getTitleStyle">Product card</h1>
</template>

<script>
export default {
    data(){
        return {
            colorIsRed: false 
        }
    },

    computed: {
        getTitleStyle(){
            return this.colorIsRed ?  { 
                color: 'red',
                textDecorationLine: 'underline'
            } : {
                color: 'blue'   
            }
        }
    }
}
</script>