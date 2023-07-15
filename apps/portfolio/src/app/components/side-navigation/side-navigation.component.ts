import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../shared/navigation/navigation.service';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'raimonx-dev-side-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])

    ])
  ]
})
export class SideNavigationComponent implements OnInit {

  navigationService = inject(NavigationService)

  showNavigation = false;
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
    // {
    //   title: 'Blog',
    //   path: 'blog',
    //   icon: 'newspaper'
    // },
    // {
    //   title: 'Projects',
    //   path: 'projects',
    //   icon: 'code-bracket-square'
    // }

  ]
  get navigation() {
    return this._navItems
  }

  ngOnInit(): void {
    this.navigationService.stateNav$.subscribe(isOpen => this.showNavigation = isOpen);
  }



}
