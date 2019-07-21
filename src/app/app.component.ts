import { Component } from '@angular/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playlist: Array<IMedia> = [
      {
          title: 'Pale Blue Dot',
          src: 'http://static.videogular.com/assets/videos/videogular.mp4',
          type: 'video/mp4'
      }
  ];

  currentIndex = 0;
  currentItem: IMedia = this.playlist[ this.currentIndex ];
 
    onClickPlaylistItem(item: IMedia) {
        this.currentIndex = 0;
        this.currentItem = item;
    }  
}
