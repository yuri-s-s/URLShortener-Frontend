import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


import { LocalStorageService } from '../services/localStorage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private localStorageService: LocalStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.localStorageService.get("token");
    
        if (!token) {
          return next.handle(req);
        }
    
        const req1 = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        });
    
        return next.handle(req1);
      }
}