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

  isAdmin: boolean = false;

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.localStorage.get("name");

    const roles = this.localStorage.get("roles");
    this.isAdmin = roles.includes("ROLE_ADMIN") ? true : false;

  }

  myUrls() {
    this.router.navigate(['shortener/urls']);
  }

  users() {
    this.router.navigate(['shortener/users']);
  }

  user() {
    this.router.navigate(['shortener/user']);
  }


  header() {
    this.router.navigate(['shortener']);
  }

  logout() {
    this.localStorage.logout();
    this.router.navigate(['']);
  }

}
