import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SignInService } from './signin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.signinService.login(userName, password)
      .subscribe(token => this.router.navigate(['home'])
      , err => {
        console.error(err);
        this.loginForm.reset();
        alert('Invalid user name or password');
      });


    console.log("userName " + userName);
    console.log("password " + password);
  }

}
