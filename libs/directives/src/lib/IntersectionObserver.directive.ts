/* eslint-disable @angular-eslint/directive-selector */
import {
  inject,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ContentChildren,
  QueryList,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Directive(
  {
    selector: '[childObserve]',
    standalone: true
  }
)
export class ChildObserverDirective implements OnInit, OnDestroy {
  private elementRef = inject(ElementRef);
  private _rootMargin = '0px';
  private _threshold = 0.1;
  private _root!: ElementRef | null;

  @Input()
  set rootElement(root: ElementRef | null) {
    this._root = root;
  }
  get rootElement(): ElementRef | null {
    return this._root;
  }

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

  @Output() rawElement: EventEmitter<IntersectionObserverEntry> = new EventEmitter();
  @Output() isIntersecting: EventEmitter<boolean> = new EventEmitter();

  private observer!: IntersectionObserver | null;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        this.rawElement.emit(entries[0]),
          this.isIntersecting.emit(entries[0].isIntersecting);
      },
      {
        root: this.rootElement ? this.rootElement.nativeElement : null,
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
@Directive(
  {
    selector: '[rootObserver]',
    standalone: true
  }
)
export class RootObserverDirective implements AfterViewInit {
  @ContentChildren(ChildObserverDirective, { descendants: true }) childObserver!: QueryList<ChildObserverDirective>;

  @Output() observeElement: EventEmitter<IntersectionObserverEntry> = new EventEmitter()

  ngAfterViewInit(): void {
    this.childObserver.forEach((child) => {
      child.rawElement.subscribe(el => {
        if (el.isIntersecting) {
          this.observeElement.emit(el);
        }
      });
    });
  }

}

