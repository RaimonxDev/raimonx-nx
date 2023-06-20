import { AfterViewInit, Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[SetColor]',
  standalone: true,
})
export class SetColorDirective implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private rendere2 = inject(Renderer2);
  private _currentColor!: string;
  private _cssNameVar!: string;

  @Input()
  set color(value: string) {
    this._currentColor = value || 'white';
    if (this.elementRef.nativeElement) {
      this.updateTextColor(this.elementRef, value);
    }
  }
  get color(): string {
    return this._currentColor;
  }

  @Input()
  set cssNameVar(value: string) {
    this._cssNameVar = `--${value}` || '--colorDirective';
  }
  get cssNameVar(): string {
    return this._cssNameVar;
  }


  ngAfterViewInit(): void {
    this.updateTextColor(this.elementRef, this.color);
  }
  public updateTextColor(elementRef: ElementRef, setColor?: string): void {
    this.rendere2.setProperty(elementRef.nativeElement, 'style', `${this.cssNameVar}:
    ${setColor} `);
  }

}
