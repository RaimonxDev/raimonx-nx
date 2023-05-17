import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconRegistryService } from './shared/icons/icon.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'raimonx-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  _iconRegistryService = inject(IconRegistryService)

  ngOnInit() {
    this._iconRegistryService.init()
  }


}
