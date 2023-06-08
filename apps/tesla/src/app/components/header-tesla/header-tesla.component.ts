import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'raimonx-dev-header-tesla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-tesla.component.html',
  styleUrls: ['./header-tesla.component.css'],
})
export class HeaderTeslaComponent implements AfterViewInit {
  @ViewChild('header') header!: ElementRef;

  private _currentColor = 'white'
  rendere2 = inject(Renderer2);


  @Input({ required: true })
  set currentColor(value: string) {
    console.log(value);
    this._currentColor = value;
  }

  get currentColor(): string {
    return this._currentColor;
  }

  ngAfterViewInit(): void {

    if (!this.header) return;

    this.rendere2.setProperty(this.header.nativeElement, 'style', `--header-color: ${this.currentColor}`);
  }




}
