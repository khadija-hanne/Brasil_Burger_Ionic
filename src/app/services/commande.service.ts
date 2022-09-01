/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../model/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http : HttpClient) { }

  /* getCommandes():Observable<Commande[]>{
    return this.http.get<Commande[]>(environment.url+"commandes");
  }

  getCommande(id : number) : Observable<Commande> {
    return this.http.get<Commande>(environment.url+"commandes/"+id);
  } */

  changerEtat(commande : Commande , etat : string) : Observable<Commande>{
    return this.http.put<Commande>(environment.url+"commandes/"+commande.id ,commande);
  }
}
