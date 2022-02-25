import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;

  page: number = 1;

  pages: number = 0;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    
    this.userService.getAll(
      this.page).subscribe(
      (data) => {

        this.users = data.users;
        this.page = data.page;
        this.pages = data.pages;
      }
    );

  }

  getUrlList(): void {

    this.userService.getAll(
      this.page).subscribe(
      (data) => {

        this.users = data.users;
        this.page = data.page;
        this.pages = data.pages;
      }
    );

  }

  test(event: number) {

    this.page = event;
    this.getUrlList();
  }

}
