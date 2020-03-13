import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  login(userName: string, password: string) {
    const body = {email: userName, password };
    return this.http.post<Auth>("http://localhost:3000/api/v1/auth", body)
      .pipe(catchError(this.handleError))
      .pipe(tap(auth => {
        this.userService.setToken(auth.token);
        console.log(`User ${userName} authenticated with token ${auth.token}`);
      }));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was ${error.error}, `
      );

    }

    return throwError('Something bad happened; please try again later');
  }


}