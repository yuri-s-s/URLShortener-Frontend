import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }


  public getById(userId: string): Observable<any> {

    return this.httpClient.get<any>(this.baseUrl + "api/user/" + userId,
    );
  }

  public edit(userId: string, body: any): Observable<any> {

    return this.httpClient.put<any>(this.baseUrl + "api/user/" + userId,
    body
    );
  }

  public changePassword(userId: string, body: any): Observable<any> {

    return this.httpClient.put<any>(this.baseUrl + "api/user/" + userId + "/changePassword",
    body
    );
  }
}
