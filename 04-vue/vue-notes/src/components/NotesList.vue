<template>
    <div class="row row-gap-4">
        <div v-for="note in notes" class="col-12 col-sm-6 col-md-4 col-lg-3" :key="note.id">
            <NoteCard :description="note.description" :id="note.id" />
        </div>
    </div>   
</template>

<script>
import NoteCard from './NoteCard.vue'

import { mapState } from 'pinia'
import { useNotesStore } from '@/store/useNotesStore';

export default {
    // props: ['notes'],
    components: {
        NoteCard
    },
    computed: {
        ...mapState(useNotesStore, ["notes"])
    }
}
</script>