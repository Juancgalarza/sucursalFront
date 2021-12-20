import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private url:string = '';

  constructor() {
    this.url = 'http://localhost:8000/api/';
    // this.url = 'http://192.168.100.213:8000/api/';
  }

  getURlApi(){
    return this.url;
  }
}
