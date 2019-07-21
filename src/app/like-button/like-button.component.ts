import { Component, OnInit, Input } from '@angular/core';
import { VgMedia } from 'videogular2/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {

  count : number = null;
  constructor() { }

  ngOnInit() {
  }

  likeVideo() {
    this.count = this.count + 1;
  }

}
