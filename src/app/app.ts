import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule ], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{
  nom = 'Mohsni';
  prenom = 'Eya';
  email = 'eyamohsni01@gmail.com';

  comment = '';
  comments: string[] = [];

  addComment() {
    if (this.comment.trim() !== '') {
      this.comments.push(this.comment);
      this.comment = '';
    }
  }
}
