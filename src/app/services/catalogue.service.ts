import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }
  getCatalogue(): Observable<any>{
    return this.http.get<any>(environment.url+'catalogues');
  }
}
