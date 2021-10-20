import {Directive, Input, OnInit, TemplateRef, ViewContainerRef,} from '@angular/core';
import {AuthService} from "@core/http/services/auth.service";

@Directive({selector: '[appShowAuthed]'})
export class ShowAuthedDirective implements OnInit {
  condition!: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: AuthService,
  ) {
  }

  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }

  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe((isAuthenticated) => {
      console.log(isAuthenticated);
      if (
        (isAuthenticated && this.condition) ||
        (!isAuthenticated && !this.condition)
      ) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}

// import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
// import {AuthService} from '@core/@http/services/auth.service';
//
//
// @Directive({selector: '[appShowAuthed]'})
// export class ShowAuthedDirective implements OnInit {
//   condition!: boolean;
//
//   constructor(
//     private templateRef: TemplateRef<any>,
//     private userService: AuthService,
//     private viewContainer: ViewContainerRef
//   ) {
//   }
//
//   @Input() set appShowAuthed(condition: boolean) {
//     this.condition = condition;
//   }
//
//   ngOnInit(): void {
//     this.userService.userDataBehaviorSubject.subscribe(
//       (isAuthenticated) => {
//         if (isAuthenticated !== null && this.condition || isAuthenticated === null && !this.condition) {
//           this.viewContainer.createEmbeddedView(this.templateRef);
//         } else {
//           this.viewContainer.clear();
//         }
//       }
//     );
//   }
// }
