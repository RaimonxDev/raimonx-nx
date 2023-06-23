import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'raimonx-dev-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatTabsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export default class ProjectsComponent { }
