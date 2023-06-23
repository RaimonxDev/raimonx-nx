import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProfileOverviewComponent } from '../../components/profile-overview/profile-overview.component';
import { RouterOutlet } from '@angular/router';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { NavigationService } from '../../shared/navigation/navigation.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'layout-classic',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideNavigationComponent, HeaderComponent, FooterComponent, ProfileOverviewComponent, ArticlesComponent, RightSidebarComponent, HeaderComponent],
  templateUrl: './classic-layout.component.html',
  styleUrls: ['./classic-layout.component.css'],
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
export class ClassicLayoutComponent implements OnInit {
  showNavigation = true;
  private navigationService = inject(NavigationService)
  private observerBreakpoint = inject(BreakpointObserver)

  toggleNavigation() {
    this.navigationService.toggleNavigation();
  }

  ngOnInit() {

    this.observerBreakpoint.observe(['(max-width: 768px)']).subscribe((res) => {
      if (res.matches) {
        this.navigationService.closeNavigation();
      } else {
        this.navigationService.openNavigation();
      }
    });


    this.navigationService.stateNav$.subscribe((state) => {
      this.showNavigation = state;
    });
  }

}
