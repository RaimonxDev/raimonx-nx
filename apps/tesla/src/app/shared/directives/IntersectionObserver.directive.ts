import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';

@Directive(
  {
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[observer]',
    standalone: true
  }
)
export class IntersectionObserverDirective implements OnInit, OnDestroy {

  elementRef = inject(ElementRef);
  private _rootMargin = '0px';
  private _threshold = 0.1;
  @Input()
  set rootMargin(value: string) {
    this._rootMargin = value;
  }
  get rootMargin(): string {
    return this._rootMargin;
  }

  @Input()
  set threshold(value: number) {
    this._threshold = value;
  }
  get threshold(): number {
    return this._threshold;
  }

  @Output() observeElement: EventEmitter<any> = new EventEmitter();

  private observer!: IntersectionObserver | null;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => this.observeElement.emit(entries[0]),
      {
        rootMargin: this.rootMargin,
        threshold: this.threshold,
      }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}