import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C10Component } from './composants/c10/c10.component';

import {registerLocaleData} from '@angular/common';
import localeFR from '@angular/common/locales/fr';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    C10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
