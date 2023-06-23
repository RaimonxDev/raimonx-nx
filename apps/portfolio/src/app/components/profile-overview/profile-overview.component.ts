import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';

@Component({
  selector: 'raimonx-dev-profile-overview',
  standalone: true,
  imports: [CommonModule, RightSidebarComponent],
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css'],
})
export class ProfileOverviewComponent { }
