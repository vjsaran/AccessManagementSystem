import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AccessRequest, AccessRequestUpdateDto } from './access-request';
import { MessageService } from './message.service';

@Injectable({providedIn:'root'})
export class RequestService {
    private accessRequestUrl = 'http://localhost:5228/Access';

    httpOptions = {
        header: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    constructor( 
        private http:HttpClient,
        private messageService: MessageService
        ) { }

    /** GET Pending Requests from the server */
   
    getPendingRequests(folderPath: string): Observable<AccessRequest[]> {
        if (!folderPath.trim()) {          
          return of([]);
        }
        return this.http.get<AccessRequest[]>(`${this.accessRequestUrl}/pendingRequests?folderPath=${folderPath}`).pipe(
          tap(x => x.length ?
             this.log(`found requests for the folder "${folderPath}"`) :
             this.log(`no requests for the folder "${folderPath}"`)),
          catchError(this.handleError<AccessRequest[]>('getPendingRequests', []))
        );
      }


      submitAccessRequest(accessRequest : AccessRequest): Observable<AccessRequest> {
          return this.http.post<AccessRequest>(`${this.accessRequestUrl}`,accessRequest).pipe(
            tap((newRequest: AccessRequest)=> this.log(`submitted access request id=${newRequest.emailId}`)),
            catchError(this.handleError<AccessRequest>('submitAccessRequest'))
          );
      }

      approveOrReject(accessRequest : AccessRequest): Observable<AccessRequest> {
         
        return this.http.put<any>(`${this.accessRequestUrl}?id=${accessRequest.id}`,{state: accessRequest.state} )
       .pipe(
           tap((newRequest: AccessRequest)=> this.log(`Processed Access Request =${newRequest.id}`)),
           catchError(this.handleError<any>('approveOrReject'))
        );
      }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error); 
    
          this.log(`${operation} failed: ${error.message}`);
    
          return of(result as T);
        };
      }
    private log(message: string) {
        this.messageService.add(`AccessManagementUI: ${message}`);
      }
}