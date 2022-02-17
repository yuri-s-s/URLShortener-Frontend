import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName!: string;


  constructor(private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.localStorage.get("name");
  }

  myUrls() {
    this.router.navigate(['admin/urls']);
  }

  users() {
    this.router.navigate(['admin/users']);
  }

  user() {
    this.router.navigate(['admin/user']);
  }


  header() {
    this.router.navigate(['admin']);
  }

  logout() {
    this.localStorage.logout();
    this.router.navigate(['']);
  }

}
