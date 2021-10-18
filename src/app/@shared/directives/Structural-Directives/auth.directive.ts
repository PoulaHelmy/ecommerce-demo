import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[showAuthed]',
})
export class AuthDirective implements OnInit {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    // console.log('AuthDirective constructor ');
  }

  ngOnInit(): void {
    // console.log('AuthDirective ngOnInit ');
    this.showAuthed();
  }

  showAuthed(): void {
    // this.authService.userDataBehaviorSubject.subscribe((isAuthenticated) => {
    //   // console.log('isAuthenticated ngOnInit ', isAuthenticated);
    //   if (isAuthenticated !== null && !this.hasView) {
    //     this.viewContainer.createEmbeddedView(this.templateRef);
    //     this.hasView = true;
    //   } else if (this.hasView) {
    //     this.viewContainer.clear();
    //     this.hasView = false;
    //   }
    // });
  }
}
