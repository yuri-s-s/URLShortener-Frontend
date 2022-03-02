import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl + "api/user/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getAll(page: number): Observable<any> {

    return this.httpClient.get<any>(this.baseUrl + "?page=" + page + "&pageSize=8" );
  }

  public getById(userId: string): Observable<any> {

    return this.httpClient.get<any>(this.baseUrl + userId,
    );
  }

  public remove(userId: string): Observable<any> {

    return this.httpClient.delete<any>(this.baseUrl + userId,
    );
  }


  public edit(userId: string, body: any): Observable<any> {

    return this.httpClient.put<any>(this.baseUrl + userId,
    body
    );
  }

  public changePassword(userId: string, body: any): Observable<any> {

    return this.httpClient.put<any>(this.baseUrl + userId + "/changePassword",
    body
    );
  }
}
