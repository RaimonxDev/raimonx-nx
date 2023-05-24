import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { SideNavigationComponent } from "../../components/side-navigation/side-navigation.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'empty-layout',
  standalone: true,
  templateUrl: './empty-layout.component.html',
  styleUrls: ['./empty-layout.component.css'],
  imports: [CommonModule, RouterOutlet, HeaderComponent, SideNavigationComponent, FooterComponent, RouterLink, RouterLinkActive, MatIconModule]
})
export class EmptyLayoutComponent {

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
