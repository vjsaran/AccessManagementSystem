import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestSearchComponent } from './request-search/request-search.component';
import { RequestSubmitComponent } from './request-submit/request-submit.component';
import { RequestUserSearchComponent } from './request-user-search/request-user-search.component';
import { RequestHomeComponent } from './request-home/request-home.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestSearchComponent,
    RequestSubmitComponent,
    RequestUserSearchComponent,
    RequestHomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
