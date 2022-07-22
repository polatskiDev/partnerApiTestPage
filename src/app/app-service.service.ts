import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartnerApiRequest } from './partner-api.request';
import { PartnerApiResponse } from './partner-api.response';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { 
    
  }

  rootURL = 'http://localhost:8081/lpx/partnerApi';

  registerView(partnerApiRequest: PartnerApiRequest): Observable<any> {
    let request = JSON.stringify(partnerApiRequest);
    return this.http.post(this.rootURL + '/registerView', request, { headers:{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    } });
  }

  subscribe(partnerApiRequest: PartnerApiRequest): Observable<PartnerApiResponse> {
    return this.http.post(this.rootURL + '/subscribe',partnerApiRequest);
  }

  submitPin(partnerApiRequest: PartnerApiRequest): Observable<PartnerApiResponse> {
    return this.http.post(this.rootURL + '/submitPincode',partnerApiRequest);
  }
}
