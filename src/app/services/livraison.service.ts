/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { Menu } from '../model/menu';
import { Produits } from '../model/produits';
import { Livreur } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http : HttpClient){}

  findLivreur(email : string):Observable<Livreur>{
    return this.http.get<Livreur>(environment.url+'users?email='+email);
  }

  getToken(){
    
   return localStorage.getItem('token');
 
  }

  
}
