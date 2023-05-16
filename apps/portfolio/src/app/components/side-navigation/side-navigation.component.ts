import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'raimonx-dev-side-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
})
export class SideNavigationComponent {
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
    }]
  get navigation() {
    return this._navItems
  }


}
