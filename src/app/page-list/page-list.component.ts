import { NotesService } from './../shared/notes.service';
import { Note } from './../../shared/note.module';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  faSearch = faSearch;
  notes: Note[] = new Array<Note>();

  constructor(private notesService : NotesService) { }

  ngOnInit(): void {

   this.notes =  this.notesService.getAll();
  }

}
