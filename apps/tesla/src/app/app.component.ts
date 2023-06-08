import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderTeslaComponent, SectionTeslaComponent } from './components';
import { IntersectionObserverDirective } from './shared/directives/IntersectionObserver.directive';


@Component({
  standalone: true,
  imports: [SectionTeslaComponent, HeaderTeslaComponent, RouterModule, IntersectionObserverDirective],
  selector: 'raimonx-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tesla';
  currentColor!: string;

  onElementObserved(event: IntersectionObserverEntry): void {
    console.log(event.isIntersecting);
    if (event.isIntersecting) {
      this.currentColor = event.target.getAttribute('data-color') || 'white';
    }
  }
}
