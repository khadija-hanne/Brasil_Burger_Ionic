/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http : HttpClient) { }

  login(user : any){
    return this.http.post('http://localhost:8000/api/login_check',user);
  }
}
