/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, Livreur } from '../model/user';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers : HttpHeaders;
  constructor(private http : HttpClient) {
    /* const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer' + token); */
  }

  getLivreurs():Observable<Livreur[]>{
    return this.http.get<Livreur[]>(environment.url+'livreurs');
  }

  getLivreur(id:number):Observable<Livreur>{
    return this.http.get<Livreur>(environment.url+'livreurs/'+id);
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

}


