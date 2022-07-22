import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { PartnerApiRequest } from '../partner-api.request';
import { PartnerApiResponse } from '../partner-api.response';

@Component({
  selector: 'app-ksa-partnerapi',
  templateUrl: './ksa-partnerapi.component.html',
  styleUrls: ['./ksa-partnerapi.component.scss']
})
export class KsaPartnerapiComponent implements OnInit {

  textPlaceholder: string;
  textValue: number = 0;
  hashCode ?: string;
  pinCode ?: string;
  partnerApiResponse : PartnerApiResponse = {} as PartnerApiResponse;

  constructor(private appService: AppServiceService) {
    this.textPlaceholder = "Enter msisdn";
   }

  ngOnInit(): void {
    this.registerView(this.generateRequest());
    
  }
  generateRequest(): PartnerApiRequest {
    const request : PartnerApiRequest = {} as PartnerApiRequest;
    request.msisdn = 966531341675;
    request.clientIP = "127.0.0.1";
    request.clientUA = "";
    request.fName = "TestName";
    request.hashCode = "";
    request.localMsisdn = "531341675";
    request.lpId = 144429;
    request.operatorCode = 1;
    request.partnerId = "1";
    request.pinCode = "";
    request.publisherId = "";
    let map = new Map();
    map.set("x",1);
    request.requestData = map;
    return request;
  }

  registerView(request: PartnerApiRequest) {
    this.appService.registerView(request).subscribe( data=>{
      this.partnerApiResponse = data;
      this.addScript(this.partnerApiResponse);
    });
  }
  addScript(partnerApiResponse: PartnerApiResponse) {
    const head = document.getElementsByTagName('head')[0];
    const dynamicScript = document.createElement('script');
    dynamicScript.type = 'text/javascript';
    if(partnerApiResponse.antiFraudScript === undefined){
      dynamicScript.innerHTML = '';
    }else{
      dynamicScript.innerHTML = partnerApiResponse.antiFraudScript;
    }
    head.insertBefore(dynamicScript, head.firstChild);
  }



  subscribeOrSubmit(){
    let request: PartnerApiRequest;
    request = this.generateRequest();
    //request.msisdn = this.textValue;
    request.hashCode = this.partnerApiResponse.hashCode;
    this.appService.subscribe(request).subscribe(data =>{
      this.partnerApiResponse = data;
    })
  }

}
