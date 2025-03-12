<template>
<div class="d-flex justify-content-between items-align-center">
    <h1 class="h3 mb-0">Tus notas</h1>

    <div>
      <button
        class="btn btn-primary btn-sm"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Nueva nota
      </button>
    </div>
</div>

<hr />

<!-- <NotesList :notes="notes" /> -->
<NotesList />

<!-- <CanvaForm :notes="notes" /> =>  con props -->
<!-- <CanvaForm @onDescription="handleDescription" /> => con emit -->
<CanvaForm />

</template>

<script>
import CanvaForm from '@/components/CanvaForm.vue';
import NotesList from '@/components/NotesList.vue';
// import { notes } from '@/data/notes';

export default {
    // data(){
    //     return {
    //         notes: notes
    //     }
    // },
    components: {
        CanvaForm,
        NotesList
    },
    // methods: {
    //   handleDescription(value){
    //     const newNote = {
    //       id: crypto.randomUUID(),
    //       description: value
    //     }

    //     this.notes.push(newNote)
    //   }
    // }
}
</script>