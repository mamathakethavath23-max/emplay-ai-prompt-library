import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  prompts = [
    { title: 'Fantasy Landscape Generator', complexity: 7 },
    { title: 'Anime Character Portrait', complexity: 5 },
    { title: 'Cyberpunk City Scene', complexity: 8 }
  ];

  newTitle = '';
  newContent = '';
  newComplexity = 1;

  error = '';

  addPrompt() {
    if (this.newTitle.length < 3) {
      this.error = 'Title must be at least 3 characters';
      return;
    }

    if (this.newContent.length < 10) {
      this.error = 'Content must be at least 10 characters';
      return;
    }

    if (this.newComplexity < 1 || this.newComplexity > 10) {
      this.error = 'Complexity must be between 1 and 10';
      return;
    }

    this.prompts.push({
      title: this.newTitle,
      complexity: this.newComplexity
    });

    this.newTitle = '';
    this.newContent = '';
    this.newComplexity = 1;
    this.error = '';
  }

  deletePrompt(index: number) {
    this.prompts.splice(index, 1);
  }
}