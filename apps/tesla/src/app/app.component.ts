import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderTeslaComponent, SectionTeslaComponent } from './components';
import { ChildObserverDirective, RootObserverDirective } from './shared/directives/IntersectionObserver.directive';
import { SetColorDirective } from './shared/directives/set-color.directive';
import { NgTemplateOutlet } from '@angular/common';



@Component({
  standalone: true,
  imports: [SectionTeslaComponent, HeaderTeslaComponent, RouterModule, RootObserverDirective, ChildObserverDirective, SetColorDirective, NgTemplateOutlet],
  selector: 'raimonx-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tesla';
  currentColor!: string;

  onElementObserved(event: IntersectionObserverEntry): void {
    if (event.isIntersecting) {
      this.currentColor = event.target.getAttribute('data-color') || 'white';
    }
  }
}
