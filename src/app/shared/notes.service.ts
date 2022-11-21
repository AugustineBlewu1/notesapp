import { Injectable } from '@angular/core';
import { Note } from 'src/shared/note.module';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes : Note[] =  new Array<Note>();

  constructor() { }

  get(id: number){
    return this.notes[id];
  }


  getId(note: Note){
    return this.notes.indexOf(note)
  }

  addNote(note: Note){
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    return index;
  }

  updateNote (index: number, title : string, body: string){
    let note = this.notes[index];
    note.title = title;
    note.body = body;
  }


  deleteNote (id: number){
    this.notes.splice(id, 1);
  }


  getAll(){
    return this.notes;
  }
}
