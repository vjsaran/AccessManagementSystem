export interface AccessRequest {
    id: number;
    emailId: string;
    path: string;
    state: string;
    approve: boolean;
  }

  export interface AccessRequestUpdateDto{
    state:string;
  }