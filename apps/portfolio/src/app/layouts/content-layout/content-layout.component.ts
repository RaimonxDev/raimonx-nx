import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'content-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.css'],
})
export class ContentLayoutComponent {


  protected _navItems = [
    {
      title: 'Home',
      path: 'home',
      icon: 'home'
    },
    {
      title: 'About',
      path: 'about',
      icon: 'user-circle'
    },
    {
      title: 'Blog',
      path: 'blog',
      icon: 'newspaper'
    },
    {
      title: 'Projects',
      path: 'projects',
      icon: 'code-bracket-square'
    }
  ]
  get navigation() {
    return this._navItems
  }
}
