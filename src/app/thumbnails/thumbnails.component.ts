import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Picture } from '../picture/picture';

@Component({
  templateUrl: './thumbnails.component.html',
  selector: 'dp-thumbnails'
})
export class ThumbnailsComponent implements OnChanges {

  @Input() pictures: Picture[] = [];
  rows: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.pictures) {
      this.rows = this.groupColumns(this.pictures);
    }
  }

  groupColumns(pictures: Picture[]) {
    const newRows = [];

    for(let index = 0; index < pictures.length; index+=3) {
      newRows.push(pictures.slice(index, index + 3));
    }
    return newRows;
  }
}
