import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderTeslaComponent, SectionTeslaComponent } from './components';


@Component({
  standalone: true,
  imports: [SectionTeslaComponent, HeaderTeslaComponent, RouterModule],
  selector: 'raimonx-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tesla';
}
