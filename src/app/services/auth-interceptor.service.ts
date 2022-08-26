/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>> {
  if (request.url !== 'http://localhost:8000/authentication_token') {
    const token = localStorage.getItem('token');
    request = request.clone({
    setHeaders: {
    Authorization: 'Bearer' + token
    }
    });
    }
    return next.handle(request);
    }
}
