import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavGlobalComponent } from './components/nav/nav-global/nav-global.component';
import { NavLocalComponent } from './components/nav/nav-local/nav-local.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, NavGlobalComponent, NavLocalComponent],
  selector: 'mac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'mac-mini';
}
