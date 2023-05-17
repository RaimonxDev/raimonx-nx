import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';

@Component({
  selector: 'raimonx-dev-about',
  standalone: true,
  imports: [CommonModule, RightSidebarComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export default class AboutComponent { }
