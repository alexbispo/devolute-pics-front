import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from './picture';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) {}

  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(API + '/api/v1/pictures/',
      formData,
      {
        observe: 'events',
        reportProgress: true
      }
    );
  }

  list(): Observable<Picture[]> | Observable<Observable<Picture[]>> | Promise<Observable<Picture[]>> {
    return this.http.get<Picture[]>(API + '/api/v1/pictures/');
  }

}
