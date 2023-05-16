import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProfileOverviewComponent } from '../../components/profile-overview/profile-overview.component';
import { RouterOutlet } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'layout-classic',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideNavigationComponent, HeaderComponent, FooterComponent, ProfileOverviewComponent, ArticlesComponent],
  templateUrl: './classic-layout.component.html',
  styleUrls: ['./classic-layout.component.css'],
})
export class ClassicLayoutComponent { }
