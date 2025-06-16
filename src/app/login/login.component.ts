import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() { }

  ngOnInit() {
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  private readonly _router = inject(Router);
  private readonly _loginService = inject(LoginService);

  onLogin() {

    const login = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    this._loginService.login(login.username, login.password).subscribe({
      next: (res)=>{
        this._router.navigate(['home'])
      },
      error:(err)=>{
        console.log(err);
        if(err.status === 401){
          this.loginForm.setErrors({'invalidCredentials': true});
        } else
          this.loginForm.setErrors({'generalCredentials': true});
      }
    })
  }


}
