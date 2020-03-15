import { Injectable } from '@angular/core';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private http: HttpClient
  ) {}

  signUp(newUser: NewUser) {
    return this.http.post(API + '/api/v1/users', newUser);
  }
}
