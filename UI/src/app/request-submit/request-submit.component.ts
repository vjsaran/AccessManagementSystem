import { Component, OnInit } from '@angular/core';

import {AccessRequest} from '../access-request';
import {RequestService} from "../request-search.service";

@Component({
  selector: 'app-request-submit',
  templateUrl: './request-submit.component.html',
  styleUrls: ['./request-submit.component.css']
})
export class RequestSubmitComponent implements OnInit {
  accessRequests: AccessRequest[] = [];
  message!: string;
  error!: string;
  
  constructor(private requestService: RequestService) {}
  
  add(emailId: string, path: string): void {

    emailId = emailId.trim();
    if (!emailId) { return; }
    path = path.trim();
    if (!path) { return; }
    this.requestService.submitAccessRequest({emailId : emailId, path: path } as AccessRequest)
      .subscribe(req => {
        if (req != null) {
          this.error = '';
          this.message = `Submitted a new access request. You request number is ${req.id}`;
        this.accessRequests.push(req);
        }
        else{
          this.message = '';
          this.error =`There was an error submitting your request`;
        }
      });
  }

  ngOnInit(): void {
  }

}
