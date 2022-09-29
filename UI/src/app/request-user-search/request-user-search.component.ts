import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import {AccessRequest} from '../access-request';
import {RequestService} from "../request-search.service";

@Component({
  selector: 'app-request-user-search',
  templateUrl: './request-user-search.component.html',
  styleUrls: ['./request-user-search.component.css']
})
export class RequestUserSearchComponent implements OnInit {
  userAccesses$!: Observable<AccessRequest[]>;
  message!: string;
  error!: string;

  constructor(private requestService: RequestService) {}
  
  search(emailId: string): void {
   
    this.userAccesses$ = this.requestService.getUserAccesses(emailId);

  }

  ngOnInit(): void {
  }

}
