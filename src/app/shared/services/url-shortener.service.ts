import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  baseUrl = environment.apiUrl + "api/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { 

  }

  public create(id: number, body: any): Observable<any> {

    return this.httpClient.post<any>(this.baseUrl + "url/user/" + id,
      body
    );
  }

  public getAllByUser(id: number, page: number): Observable<any> {

    return this.httpClient.get<any>(this.baseUrl + "url/user/" + id + "?page=" + page + "&pageSize=8" );
  }

  public urlDetails(urlId: any): Observable<any> {

    return this.httpClient.get<any>(this.baseUrl + "short/" + urlId + "/statistics");
  }
}
