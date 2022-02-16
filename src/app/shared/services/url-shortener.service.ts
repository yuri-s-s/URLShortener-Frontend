import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  baseUrl = "http://localhost:8080/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { 

  }

  public create(id: number, body: any): Observable<any> {

    return this.httpClient.post<any>(this.baseUrl + "api/url/user/" + id,
      body
    );
  }

  public getAllByUser(id: number, page: number): Observable<any> {

    return this.httpClient.get<any>(this.baseUrl + "api/url/user/" + id + "?page=" + page + "&pageSize=8" );
  }

  public urlDetails(urlId: any): Observable<any> {

    return this.httpClient.get<any>(this.baseUrl + "api/short/" + urlId + "/statistics");
  }
}
