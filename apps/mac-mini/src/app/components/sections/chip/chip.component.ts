import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildObserverDirective, RootObserverDirective } from '@raimonx-dev/directives';

@Component({
  selector: 'mac-chip',
  standalone: true,
  imports: [CommonModule, ChildObserverDirective, RootObserverDirective],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
})
export class ChipComponent {

  @ViewChildren('bar') bars!: QueryList<ElementRef>;

  addAnimation($event: boolean) {
    if (!$event) return;
    this.bars.forEach((bar) => {
      bar.nativeElement.classList.add(`animation-bar`);
    });
  }
}
