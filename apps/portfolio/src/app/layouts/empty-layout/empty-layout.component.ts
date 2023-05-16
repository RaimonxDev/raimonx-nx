import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'raimonx-dev-empty-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './empty-layout.component.html',
  styleUrls: ['./empty-layout.component.css'],
})
export class EmptyLayoutComponent { }
