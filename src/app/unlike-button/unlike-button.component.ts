import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unlike-button',
  templateUrl: './unlike-button.component.html',
  styleUrls: ['./unlike-button.component.scss']
})
export class UnlikeButtonComponent implements OnInit {

  count : number = null;
  constructor() { }

  ngOnInit() {
  }

  unlikeVideo() {
    this.count = this.count + 1;
  }

}
