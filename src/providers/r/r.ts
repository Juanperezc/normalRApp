import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import  'rxjs/add/operator/catch';

import  'rxjs/add/operator/map';
/*
  Generated class for the RProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RProvider {
  baseUrl:string = "http://148.72.23.0:3000";

  constructor(public http: HttpClient) {
    console.log('Hello RProvider Provider');
  }

  public getProbSimpson(b,a=-20,n=20) {
   return  this.http.get(this.baseUrl + '/api/normal/simpson?a='+a+'&b='+b+'&n='+n);
  }
  public getProbSimpsonpy(b,a=-20,n=20) {
    return  this.http.get(this.baseUrl + '/api/normal/simpsonpy?a='+a+'&b='+b+'&n='+n);
   }
  public  getProbTrapecio(b,a=-20,n=20) {
    return  this.http.get(this.baseUrl + '/api/normal/trapecio?a='+a+'&b='+b+'&n='+n);
   }
   public  getnormalTable() {
    return  this.http.get(this.baseUrl + '/api/normal/table');
   }
   public  getnormalTablen() {
    return  this.http.get(this.baseUrl + '/api/normal/tablen');
   }
}
