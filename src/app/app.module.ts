import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatchersComponent } from './matchers/matchers.component';
import { EstruturasComponent } from './estruturas/estruturas.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchersComponent,
    EstruturasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
