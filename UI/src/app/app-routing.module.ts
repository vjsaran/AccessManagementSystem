import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestSearchComponent } from './request-search/request-search.component';
import { RequestSubmitComponent } from './request-submit/request-submit.component';

const routes: Routes = [
  { path: '', redirectTo: '/pendingRequests', pathMatch: 'full' },
  { path: 'pendingRequests', component: RequestSearchComponent },
  { path: 'submitRequest', component: RequestSubmitComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/