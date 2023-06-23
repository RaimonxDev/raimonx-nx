import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'raimonx-dev-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  darkModeToggle() {
    const html = document.getElementsByTagName('html')[0]
    // add class to html
    html.classList.toggle('dark')

  }

}
