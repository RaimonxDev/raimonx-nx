import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[menuHover]',
  standalone: true,
})
export class MenuHoverDirective {

  private elementRef = inject(ElementRef);
  @HostListener('mouseenter') onMouseEnter() {
    const { left, top, width, height } = this.elementRef.nativeElement.getBoundingClientRect();

    const menuBackDrop = document.querySelector("#menu-backdrop") as HTMLElement;

    menuBackDrop.style.setProperty("--left", `${left}px`);
    menuBackDrop.style.setProperty("--top", `${top}px`);
    menuBackDrop.style.setProperty("--width", `${width}px`);
    menuBackDrop.style.setProperty("--height", `${height}px`);

    menuBackDrop.style.opacity = "1";
    menuBackDrop.style.visibility = "visible";
  }

  @HostListener('mouseleave') onMouseLeave() {
    const menuBackDrop = document.querySelector("#menu-backdrop") as HTMLElement;

    menuBackDrop.style.opacity = "0";
    menuBackDrop.style.visibility = "hidden";
  }


}
