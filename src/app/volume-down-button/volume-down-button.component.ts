import { Component, OnInit, Input } from '@angular/core';
import { VgMedia } from 'videogular2/core';

@Component({
  selector: 'app-volume-down-button',
  templateUrl: './volume-down-button.component.html',
  styleUrls: ['./volume-down-button.component.scss']
})
export class VolumeDownButtonComponent implements OnInit {

  @Input('playItem') playItem : VgMedia;
  
  constructor() { }

  ngOnInit() {
  }

  decreaseVolume() {
    if (this.playItem.volume>0.1) {
      this.playItem.volume = this.playItem.volume - 0.1;
    }
  }
}
