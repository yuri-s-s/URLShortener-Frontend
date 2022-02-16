import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';
import { UrlShortenerService } from 'src/app/shared/services/url-shortener.service';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.css']
})
export class UrlsComponent implements OnInit {

  urls: any;

  page: number = 1;

  pages: number = 0;

  constructor(public urlShortenerService :UrlShortenerService, private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {

    this.urlShortenerService.getAllByUser(
      this.localStorage.get("id"), this.page
    ).subscribe(
      (data) => {

        this.urls = data.urls;
        this.page = data.page;
        this.pages = data.pages;

      }
    );
  }

  getUrlList(): void {

    this.urlShortenerService.getAllByUser(
      this.localStorage.get("id"), this.page).subscribe(
      (data) => {

        this.urls = data.urls;

      }
    );
  }

  test(event: number) {
    this.page = event;
    this.getUrlList()
  }

  details(shortenedUrl: string) {
    console.log(shortenedUrl.split("short/")[1])
    this.router.navigate([`admin/urls/url/${shortenedUrl.split("short/")[1]}`]);
  }

}
