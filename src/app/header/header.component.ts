import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './header.component.html',
  selector: 'dp-header',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  user$: Observable<User>;

  isShown = false;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
  }

  toggle() {
    this.isShown = !this.isShown;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
