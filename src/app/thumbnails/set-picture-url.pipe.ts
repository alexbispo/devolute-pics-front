import { PipeTransform, Pipe } from '@angular/core';
import { environment } from 'src/environments/environment';

const CLOUD = environment.cloud;

@Pipe({ name: 'setPictureUrl' })
export class SetPictureUrl implements PipeTransform {
  transform(url: string) {
    return CLOUD + url;
  }

}
