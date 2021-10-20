import {Directive, Input, TemplateRef, ViewContainerRef,} from '@angular/core';
import {AuthService} from "@core/http/services/auth.service";

@Directive({selector: '[appRole]'})
export class RoleDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: AuthService,
  ) {
  }

  @Input() set appRole(role: string) {

    this.userService.userDate$.subscribe((userData) => {
      if (
        userData && role === userData.role && !this.hasView
      ) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else {
        this.hasView = false;
        this.viewContainer.clear();
      }
    });
  }

}

