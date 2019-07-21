import { Component, OnInit, Input } from '@angular/core';
import { VgMedia } from 'videogular2/core';

@Component({
  selector: 'app-pause-button',
  templateUrl: './pause-button.component.html',
  styleUrls: ['./pause-button.component.scss']
})
export class PauseButtonComponent implements OnInit {

  @Input('playItem') playItem : VgMedia;
  constructor() { }

  ngOnInit() {
  }

  pauseVideo() {
    this.playItem.pause();
  }
}
