import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInService } from './signin/signin.service';
import { SignUpComponent } from './signup/signup.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { HomeComponent } from './home/home.component';
import { RequestInterceptor } from './token/request.interceptor';
import { SetPictureUrl } from './thumbnails/set-picture-url.pipe';
import { HeaderComponent } from './header/header.component';
import { PictureFormComponent } from './picture-form/picture-form.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingInterceptor } from './loading/loading.intercptor';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ThumbnailsComponent,
    SetPictureUrl,
    HeaderComponent,
    PictureFormComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SignInService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
