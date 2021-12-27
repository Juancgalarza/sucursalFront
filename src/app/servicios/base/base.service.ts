import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private url:string = '';

  constructor() {
    this.url = environment.url;
  }

  getURlApi(){
    return this.url;
  }
}
