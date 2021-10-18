import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCardHover]',
})
export class CardHoverDirective {
  private el!: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.style.transform = 'translateY(-10px)';
    this.el.style.boxShadow = '0 3px 41px #00000029';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.style.transform = 'translateY(0)';
    this.el.style.boxShadow = 'none';
  }

}
