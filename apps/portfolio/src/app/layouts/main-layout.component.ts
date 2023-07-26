import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'raimonx-dev-main-layout',
  standalone: true,
  imports: [NgIf, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export default class MainLayoutComponent {

  _acRouter = inject(ActivatedRoute)

  get layout() {
    return this._acRouter.snapshot.data['layout']
  }


}
