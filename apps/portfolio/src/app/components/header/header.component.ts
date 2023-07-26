import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'raimonx-dev-header',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('showMenu', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)', }),
        animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('100ms cubic-bezier(0.4, 0, 1, 1)', style({ opacity: 0, transform: 'scale(0.95)' })),
      ])
    ]),
    trigger('showMenuBackdrop', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('100ms cubic-bezier(0.4, 0, 1, 1)', style({ opacity: 0 })),
      ])
    ]),

  ]
})
export class HeaderComponent {
  menuIsOpen = signal(false)

  toggleMenu() {
    this.menuIsOpen.set(!this.menuIsOpen())
  }

  darkModeToggle() {
    const html = document.getElementsByTagName('html')[0]
    // add class to html
    html.classList.toggle('dark')

  }

}
