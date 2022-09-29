import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import {AccessRequest} from '../access-request';
import {RequestService} from "../request-search.service";

@Component({
  selector: 'app-request-search',
  templateUrl: './request-search.component.html',
  styleUrls: ['./request-search.component.css']
})
export class RequestSearchComponent implements OnInit {
  accessRequests$!: Observable<AccessRequest[]>;
  message!: string;
  error!: string;
  

  constructor(private requestService: RequestService) {}

   
   search(folderPath: string): void {
   
    this.accessRequests$ = this.requestService.getPendingRequests(folderPath);
  }

  approve(request: AccessRequest): void{
    
    request.state = 'Approved';
    this.requestService.approveOrReject(request).subscribe(req => {
      if (req != null) {
      this.error = '';
      this.message = `You request number ${req.id} has been successfully approved`;
    
    }
    else{
      this.message = '';
      this.error =`There was an error while processing your request`;
    }
  });
  }


  reject(request: AccessRequest): void{
    request.state = 'Rejected';
    this.requestService.approveOrReject(request).subscribe(req => {
      if (req != null) {
      this.error = '';
      this.message = `You request number ${req.id} has been rejected`;
    
    }
    else{
      this.message = '';
      this.error =`There was an error while processing your request`;
    }
  });
  }

  ngOnInit(): void {

  }

}
