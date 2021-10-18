import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[showGuest]',
})
export class GuestDirective implements OnInit {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    // console.log('GuestDirective constructor');
  }

  ngOnInit(): void {
    // console.log('GuestDirective ngOnInit');
    this.showGuest();
  }

  showGuest(): void {}
}
