import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../shared/card/card.component';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'raimonx-dev-projects',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatMenuModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export default class ProjectsComponent { }
