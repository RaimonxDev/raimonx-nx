import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProfileOverviewComponent } from '../../components/profile-overview/profile-overview.component';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { StackComponent } from '../../components/stack/stack.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'raimonx-dev-home',
  standalone: true,
  imports: [CommonModule, SideNavigationComponent, HeaderComponent, FooterComponent, ProfileOverviewComponent, ArticlesComponent, StackComponent, RightSidebarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export default class HomeComponent {


}
