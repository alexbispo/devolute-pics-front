import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';

@Component({
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signupService: SignUpService) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.signupForm.valid) {
      const newUser = this.signupForm.getRawValue() as NewUser;

      this.signupService.signUp(newUser)
        .subscribe(
          () => this.router.navigate([''])
          , err => {
            console.error(err);
            alert('Something bad happened; please try again later');
          }
        );
    }
  }



}
