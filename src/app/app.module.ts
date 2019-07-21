import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { StopButtonComponent } from './stop-button/stop-button.component';
import { VolumeUpButtonComponent } from './volume-up-button/volume-up-button.component';
import { VolumeDownButtonComponent } from './volume-down-button/volume-down-button.component';
import { PauseButtonComponent } from './pause-button/pause-button.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { UnlikeButtonComponent } from './unlike-button/unlike-button.component';

@NgModule({
  declarations: [
    AppComponent,
    StopButtonComponent,
    VolumeUpButtonComponent,
    VolumeDownButtonComponent,
    PauseButtonComponent,
    StartButtonComponent,
    LikeButtonComponent,
    UnlikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  