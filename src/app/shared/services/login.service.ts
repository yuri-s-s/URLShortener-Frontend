import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  baseUrl = "http://localhost:8080/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public authenticate(body: any): Observable<any> {

    return this.httpClient.post<any>(this.baseUrl + "api/authenticate",
      body
    );
  }
}
