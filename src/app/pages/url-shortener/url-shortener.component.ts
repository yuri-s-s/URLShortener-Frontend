import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';
import { UrlShortenerService } from 'src/app/shared/services/url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  urlForm!: FormGroup;

  shortenerUrl!: string;

  change: boolean = false;

  constructor( public urlShortenerService :UrlShortenerService, private formBuilder: FormBuilder, private localStorage: LocalStorageService) { }

  ngOnInit(): void {

    this.urlForm = this.formBuilder.group({
      url: [null]
    })
  }

  onSubmit(){
    this.urlShortenerService.create(
      this.localStorage.get("id"),
      {
        "originalUrl": this.urlForm.get("url")?.value
      }
    ).subscribe(
      (data) => {

        this.shortenerUrl = data.shortenedUrl;
        this.change = true;
      }
    );
  }

  copy(code: string){

    let listener = (e: ClipboardEvent) => {
      e.clipboardData?.setData("text/plain", (code));
      e.preventDefault();
    }

    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
  }

}
