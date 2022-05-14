import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IframeService {
  iframe
  constructor() { }
   setIframe(value){
    this.iframe = value
  }
  get getIframe(){
    return this.iframe
  }
}
