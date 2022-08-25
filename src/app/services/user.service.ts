/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers : HttpHeaders;
  constructor() {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
  }
}
