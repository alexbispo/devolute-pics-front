import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SignInService } from './signin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private signinService: SignInService,
    private router: Router
  ) { }

  get urlHomeImage() {
    let urlImage = '/assets/img/home.jpg';
    if (environment.production) {
      urlImage = '/devolute-pics-front' + urlImage;
    }
    return urlImage;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.signinService.login(email, password)
      .subscribe(token => this.router.navigate(['home'])
      , err => {
        console.error(err);
        this.loginForm.reset();
        alert('Invalid user name or password');
      });


    console.log("email " + email);
    console.log("password " + password);
  }

}
