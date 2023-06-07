import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderTeslaComponent, HeroTeslaComponent, SectionTeslaComponent } from './components';


@Component({
  standalone: true,
  imports: [HeroTeslaComponent, SectionTeslaComponent, HeaderTeslaComponent, RouterModule],
  selector: 'raimonx-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tesla';
}
