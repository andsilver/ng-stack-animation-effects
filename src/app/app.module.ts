import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxStackEffectsModule } from 'projects/ngx-stack-effects/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStackEffectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
