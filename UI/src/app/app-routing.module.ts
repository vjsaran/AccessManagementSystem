import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestSearchComponent } from './request-search/request-search.component';
import { RequestSubmitComponent } from './request-submit/request-submit.component';
import { RequestUserSearchComponent } from './request-user-search/request-user-search.component';
import { RequestHomeComponent } from './request-home/request-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RequestHomeComponent, data:{title:'Home'}},
  { path: 'pendingRequests', component: RequestSearchComponent, data:{title:'Approval Page'} },
  { path: 'submitRequest', component: RequestSubmitComponent, data:{title:'Access Request'}},
  { path: 'userAccess', component: RequestUserSearchComponent , data:{title:'User Access Page'}}
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