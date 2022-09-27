import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {AccessRequest} from '../access-request';
import {RequestService} from "../request-search.service";

@Component({
  selector: 'app-request-search',
  templateUrl: './request-search.component.html',
  styleUrls: ['./request-search.component.css']
})
export class RequestSearchComponent implements OnInit {
  accessRequests$!: Observable<AccessRequest[]>;
  
  

  constructor(private requestService: RequestService) {}

   
   search(folderPath: string): void {
   
    this.accessRequests$ = this.requestService.getPendingRequests(folderPath);
  }

  approve(request: AccessRequest): void{
    
    request.state = 'Approved';
this.requestService.approveOrReject(request)
.subscribe(request => {console.log(request);
});
  }


  reject(request: AccessRequest): void{
    request.state = 'Rejected';
    this.requestService.approveOrReject(request).subscribe(request => {console.log(request)});
  }

  ngOnInit(): void {

  }

}
