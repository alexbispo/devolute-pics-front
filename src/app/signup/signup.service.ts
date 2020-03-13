import { Injectable } from '@angular/core';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private http: HttpClient
  ) {}

  signUp(newUser: NewUser) {
    return this.http.post("http://localhost:3000/api/v1/users", newUser);
  }
}
