import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestSearchComponent } from './request-search/request-search.component';
import { RequestSubmitComponent } from './request-submit/request-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestSearchComponent,
    RequestSubmitComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
