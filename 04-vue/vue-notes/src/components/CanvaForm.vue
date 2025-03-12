<template>
    <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvasWithBothOptions"
    aria-labelledby="offcanvasWithBothOptionsLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
        Nueva nota
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form @submit.prevent="handleOnSubmit" class="h-100 d-flex flex-column justify-content-between">
        <div class="mb-3">
          <label for="message" class="form-label">Nota:</label>
          <textarea
            class="form-control"
            id="message"
            name="description"
            rows="5"
            placeholder="Escribe tu nota..."
            v-model="description"
          ></textarea>
        </div>

        <div class="d-flex gap-2 justify-content-start">
            <button type="submit" class="btn btn-primary">Guardar</button>
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="offcanvas" aria-label="Close" ref="btnCloseRef">Cancelar</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import { useNotesStore } from '@/store/useNotesStore';
import { mapActions } from 'pinia';

export default {
  //props: ["notes"],
  data(){
    return {
        description: ""
    }
  },
  methods: {
    handleOnSubmit(){

      // Pueden crear validaciones antes de crear la nota

      // Usando props
      // const newNote = {
      //   id: crypto.randomUUID(),
      //   description: this.description
      // }

      //this.notes.push(newNote)

      // Usando emit: compartir data de hijo a padre
      const error = false;
      
      if(error === true){
        alert("No se pudo guardar")
        return;
      }

      const newNote = {
        id: crypto.randomUUID(),
        description: this.description
      }

      // Usar la acción
      this.addNote(newNote)

      // this.$emit('onDescription', this.description);
      this.description = "";

      this.$refs.btnCloseRef.click(); // Ejecutamos el evento click del botón cerrar


    },
    ...mapActions(useNotesStore, ['addNote'])
  }
}
</script>

