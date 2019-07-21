import { Component, OnInit, Input } from '@angular/core';
import { VgMedia } from 'videogular2/core';

@Component({
  selector: 'app-volume-up-button',
  templateUrl: './volume-up-button.component.html',
  styleUrls: ['./volume-up-button.component.scss']
})
export class VolumeUpButtonComponent implements OnInit {

  @Input('playItem') playItem : VgMedia;
  
  count : number = 0.1;
  constructor() { }

  ngOnInit() {
    this.playItem.volume = this.count;
  }

  increaseVolume() {
    if (this.count<0.9) {
      this.count = this.count + 0.1;
      this.playItem.volume = this.count;
    }
    else {
      this.count = this.playItem.volume;
    }
  }
}
