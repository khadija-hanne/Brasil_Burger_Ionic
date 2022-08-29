/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../model/menu';
import { Produits } from '../model/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) { }

  getProduct(id:number):Observable<Menu>{
    return this.http.get<Menu>(environment.url+'produits'+id);
  }

  getProducts(type: string):Observable<Produits[]>{
    return this.http.get<Produits[]>(environment.url+type);
  }

  getMenus():Observable<Menu[]>{
    return this.http.get<Menu[]>(environment.url+'menus');
  }


}
