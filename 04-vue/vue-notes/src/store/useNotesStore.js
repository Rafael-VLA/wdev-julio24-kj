import { defineStore } from 'pinia'
import { notes } from '@/data/notes';

export const useNotesStore = defineStore('notes', {
    state: () => ({ // Simula el método data de un componente
        notes: notes
    }),
    actions: { // Simula la propiedad methods de un componente
        addNote(note){
            this.notes.push(note);
        },
        removeNote(id){
            const newNotes = this.notes.filter(note => note.id !== id);
            this.notes = newNotes;
        }
    }
})