import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NOTES } from './mock-notes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  notesCount: number;

  notes = NOTES;

  selectedNote = NOTES[0];

  onSelect(note: Note): void {
    this.selectedNote = note;
  }

  ngOnInit(){
    this.notesCount = this.notes.length;
  }

  addItem(){
    var note: Note = {
      title: this.selectedNote.title,
      text: this.selectedNote.text,
      checked: this.selectedNote.checked
    };
    
    this.notes.push(note);
    this.selectedNote = note;
  }

  removeItem(i){
    this.notes.splice(i, 1);
    this.notesCount = this.notes.length;
  } 
}
