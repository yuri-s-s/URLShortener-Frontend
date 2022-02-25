import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';
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

  userId!: string;

  constructor(public userService: UserService, private toastr: ToastrService, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    
    this.userId = this.localStorage.get("id");

    this.userService.getAll(
      this.page).subscribe(
      (data) => {

        this.users = data.users;
        this.page = data.page;
        this.pages = data.pages;
      }
    );

  }

  getUsersList(): void {

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
    this.getUsersList();
  }

  remove(event: any) {

    this.userService.remove(event.id).subscribe({

      next: () => {
        this.toastr.success("Usuário removido com sucesso!", '', {
          timeOut: 2000
        });

        this.getUsersList();
      }
    })
  }

}
