import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetColorDirective } from '../../shared/directives/set-color.directive';
import { MenuHoverDirective } from '../../shared/directives/menuHover.directive';

@Component({
  selector: 'raimonx-dev-header-tesla',
  standalone: true,
  imports: [CommonModule, SetColorDirective, MenuHoverDirective],
  templateUrl: './header-tesla.component.html',
  styleUrls: ['./header-tesla.component.css'],
})
export class HeaderTeslaComponent { }
