import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  userName!: string;


  constructor(private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.localStorage.get("name");
  }

}
