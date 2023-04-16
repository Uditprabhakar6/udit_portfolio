import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { VideoBackgroundComponent } from './video-background/video-background.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
