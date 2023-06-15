import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavGlobalComponent } from './components/nav/nav-global/nav-global.component';
import { NavLocalComponent } from './components/nav/nav-local/nav-local.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { ChipComponent } from './components/sections/chip/chip.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, NavGlobalComponent, NavLocalComponent, HeroComponent, ChipComponent],
  selector: 'mac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'mac-mini';
}
