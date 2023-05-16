import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { IconRegistryService } from './shared/icons/icon.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  providers: [IconRegistryService],
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
