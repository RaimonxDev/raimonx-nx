import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicLayoutComponent } from './classic-layout/classic-layout.component';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';
import { ActivatedRoute } from '@angular/router';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

@Component({
  selector: 'raimonx-dev-main-layout',
  standalone: true,
  imports: [CommonModule, ClassicLayoutComponent, EmptyLayoutComponent, ContentLayoutComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export default class MainLayoutComponent {

  _acRouter = inject(ActivatedRoute)

  get layout() {
    return this._acRouter.snapshot.data['layout']
  }


}
