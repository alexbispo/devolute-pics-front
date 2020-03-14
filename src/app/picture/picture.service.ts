import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from './picture';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) {}

  list(): Observable<Picture[]> | Observable<Observable<Picture[]>> | Promise<Observable<Picture[]>> {
    return this.http.get<Picture[]>('http://localhost:3000/api/v1/pictures/');
  }

}
