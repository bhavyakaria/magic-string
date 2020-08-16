import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MagicStringModule } from 'magic-string';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicStringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
