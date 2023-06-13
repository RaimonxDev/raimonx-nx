import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mac-nav-global',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-global.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./nav-global.component.css'],
})
export class NavGlobalComponent {
  linksGlobalHeader = ['Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV y Casa', 'Entretenimiento', 'Soporte', 'Donde comprar']
}
