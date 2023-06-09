import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderTeslaComponent, SectionTeslaComponent } from './components';
import { ChildObserverDirective, RootObserverDirective } from './shared/directives/IntersectionObserver.directive';



@Component({
  standalone: true,
  imports: [SectionTeslaComponent, HeaderTeslaComponent, RouterModule, RootObserverDirective, ChildObserverDirective],
  selector: 'raimonx-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tesla';
  currentColor!: string;

  onElementObserved(event: IntersectionObserverEntry): void {
    if (event.isIntersecting) {
      console.log(event.isIntersecting);
      this.currentColor = event.target.getAttribute('data-color') || 'white';
      console.log('current color', this.currentColor);
    }
  }
}
