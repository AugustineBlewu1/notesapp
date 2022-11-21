import { NotesService } from './../shared/notes.service';
import { Note } from '../../shared/note.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {
  note!: Note
  constructor(private notesService : NotesService, private router: Router) { }

  ngOnInit(): void {
    this.note = new Note();
  }


  onSubmit(form: NgForm) {
   this.notesService.addNote(form.value);
   this.router.navigateByUrl('/');
  }

}
