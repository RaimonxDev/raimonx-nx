import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicLayoutComponent } from './classic-layout/classic-layout.component';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';

@Component({
  selector: 'raimonx-dev-main-layout',
  standalone: true,
  imports: [CommonModule, ClassicLayoutComponent, EmptyLayoutComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent { }
