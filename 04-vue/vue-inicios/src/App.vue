<template>
  <!-- En el template renderizamos las etiquetas de HTML -->

  <div class="container">
    <h1 id="main-title">Hola mundo</h1>
  
    <Counter :initialCounter="100" />
    <hr>

    <Message />
  </div>

</template>

<script>
import Counter from '@/components/Counter.vue'
import Message from '@/components/Message.vue'

export default {
  components: {
    Counter,
    Message 
  }
}
</script>
