import { Component, OnInit, Input } from '@angular/core';
import { VgMedia } from 'videogular2/core';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent implements OnInit {

  @Input('playItem') playItem : VgMedia;
  constructor() { }

  ngOnInit() {
  }

  playVideo() {
    this.playItem.play();
  }

}
