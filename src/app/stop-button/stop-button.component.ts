import { Component, OnInit, Input } from '@angular/core';
import { VgMedia } from 'videogular2/core';

@Component({
  selector: 'app-stop-button',
  templateUrl: './stop-button.component.html',
  styleUrls: ['./stop-button.component.scss']
})
export class StopButtonComponent implements OnInit {

  @Input('playItem') playItem : VgMedia;
  constructor() { }

  ngOnInit() {
  }

  stopVideo() {
    this.playItem.pause();
  }

  
}
