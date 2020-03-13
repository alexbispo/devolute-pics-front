import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './signin/auth.guard';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
