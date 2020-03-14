import { PipeTransform, Pipe } from '@angular/core';

const CLOUD = 'http://localhost:3000/';

@Pipe({ name: 'setPictureUrl' })
export class SetPictureUrl implements PipeTransform {
  transform(url: string) {
    return CLOUD + url;
  }

}
