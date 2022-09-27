import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {AccessRequest} from '../access-request';
import {RequestService} from "../request-search.service";

@Component({
  selector: 'app-request-submit',
  templateUrl: './request-submit.component.html',
  styleUrls: ['./request-submit.component.css']
})
export class RequestSubmitComponent implements OnInit {
  accessRequests: AccessRequest[] = [];

  constructor(private requestService: RequestService) { }
  
  add(emailId: string, path: string): void {

    emailId = emailId.trim();
    if (!emailId) { return; }
    path = path.trim();
    if (!path) { return; }
    this.requestService.submitAccessRequest({emailId : emailId, path: path } as AccessRequest)
      .subscribe(request => {
        this.accessRequests.push(request);
      });
  }

  ngOnInit(): void {
  }

}
