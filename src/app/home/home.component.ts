import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Picture } from '../picture/picture';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  pictures: Picture[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pictures = this.activatedRoute.snapshot.data['pictures'];
  }


}
