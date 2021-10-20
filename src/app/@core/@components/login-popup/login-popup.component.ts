import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@core/http/services/auth.service";
import {SimpleUser} from "@core/data/interface/user.model";
import {delay} from "rxjs/operators";
import {of} from "rxjs";
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {
  hide = false;
  loginForm!: FormGroup;
  loading = false;

  constructor(
    private dialogRef: MatDialogRef<LoginPopupComponent>,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit(): void {
    this.loading = true;
    of(this.loginForm.value).pipe(
      delay(3000)
    ).subscribe((res) => {
      if (this.loginForm.controls.username.value && this.loginForm.controls.username.value.includes('admin')) {
        const data: SimpleUser = {
          username: this.loginForm.controls.username.value,
          password: this.loginForm.controls.password.value,
          role: "ADMIN"
        };
        this.authService.SetUserDate(data);
      } else {
        const data: SimpleUser = {
          username: this.loginForm.controls.username.value,
          password: this.loginForm.controls.password.value,
          role: "USER"
        };
        this.authService.SetUserDate(data);
      }
      this.loading = false;
      this.dialogRef.close();
      this.router.navigate(['/']).then();
    })
  }
}
