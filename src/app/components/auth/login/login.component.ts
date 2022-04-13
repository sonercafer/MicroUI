import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../../../models/user';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title: string = 'Login';
  
  user: User;
  router: any;
  message: string; 

  constructor(
    private titleService: Title,
    router: Router,
    private loginService: LoginService
  ) {
    this.user = new User();
    this.router = router;
    this.message = "Google Maps'e hoş geldiniz.";
    if (this.loginService.currentUserValue) { 
      this.router.navigate(['/dashboard']);
  }
  } 

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  loginSubmit(loginForm: NgForm): void { 
    this.user.Email = loginForm.controls.email.value;
    this.user.Password = loginForm.controls.password.value;
    this.loginService
      .login(this.user)
      .pipe(first())
      .subscribe(
        (data:any) => { 
          if(data.isSuccess){
            this.router.navigate(['/dashboard']);
          }
          else {
            this.message = 'Kullanıcı adı ya da şifre geçerli değil.';
          } 
        } 
      ); 
  }
}
