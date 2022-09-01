/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable one-var */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { Livraison } from '../model/livraison';
import { Menu } from '../model/menu';
import { Produits } from '../model/produits';
import { Livreur } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http : HttpClient){}

  // Récupérer le livreur par email
  findLivreur(email : string):Observable<Livreur>{
    return this.http.get<Livreur>(environment.url+'users?email='+email);
  }


  // Récupérer le token dans le local storage
  getToken(){ 
   return localStorage.getItem('token');
  }

  getLivraison(id:number):Observable<Livraison>{
    return this.http.get<Livraison>(environment.url+'livraisons/'+id);
  }

  changerEtat(livraison: Livraison , etat : string) : Observable<Livraison>{
    return this.http.put<Livraison>(environment.url+"livraisons/"+livraison.id ,livraison);
  }

  nowDate() {
    // eslint-disable-next-line no-var
     var date = new Date(),
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();
    if (month.length < 2) 
      {
        month = '0' + month;
      }
        
    if (day.length < 2) 
      {
        day = '0' + day;
      }   
    return [year, month, day].join('-');
}
  
}
