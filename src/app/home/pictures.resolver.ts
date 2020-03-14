import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Picture } from '../picture/picture';
import { PictureService } from '../picture/picture.service';

@Injectable({
  providedIn: 'root'
})
export class PicturesResolver implements Resolve<Observable<Picture[]>> {

  constructor(private pictureService: PictureService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Picture[]> | Observable<Observable<Picture[]>> | Promise<Observable<Picture[]>> {
    return this.pictureService.list();
  }
}
