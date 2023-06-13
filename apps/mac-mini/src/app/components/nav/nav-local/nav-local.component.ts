import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mac-nav-local',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-local.component.html',
  styleUrls: ['./nav-local.component.css'],
})
export class NavLocalComponent {

  navLocal = ['Descripcion', 'Especificaciones', 'Comparar', 'Descubre el Mac', 'Comprar']
}
