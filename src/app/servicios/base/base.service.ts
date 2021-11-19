import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private url:string = '';

  constructor() { 
    this.url = 'http://localhost:8000/api/';
  }

  getURlApi(){
    return this.url;
  }
}
