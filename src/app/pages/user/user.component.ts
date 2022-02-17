import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;

  userId!: string;

  name!: string;

  email!: string;

  constructor(private localStorage: LocalStorageService, public userService : UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.userId = this.localStorage.get("id");

    this.userService.getById(
      this.userId,
    ).subscribe(
      (data) => {

        this.name = data.name;
        this.email = data.email;

        this.userForm = this.formBuilder.group({
          name: [data.name],
          email: [data.email],
        })

      }
    );

  }

  edit(){
    this.userId = this.localStorage.get("id");

    this.userService.edit(
      this.userId,
      {
        "name": this.userForm.get("name")?.value
      }
    ).subscribe(
      (data) => {

        this.name = data.name;
        this.email = data.email;

        this.userForm = this.formBuilder.group({
          name: [data.name],
          email: [data.email],
        })

        this.localStorage.set("name", data.name)

      }
    );
  }

}
