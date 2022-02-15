import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(private router: Router, public loginService: LoginService, private localStorage: LocalStorageService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: [null],
      password: [null]
    })

  }

  authenticate() {

    this.loginService.authenticate(
      {
        "email": this.loginForm.get("email")?.value,
        "password": this.loginForm.get("password")?.value
      }
    ).subscribe(
      (data) => {

        this.localStorage.set("token", data.token)
        this.localStorage.set("roles", data.roles)
        this.localStorage.set("name", data.name)
        this.localStorage.set("id", data.id)

        if(Array<string>(data.roles).toString().includes("ROLE_ADMIN")){

          this.router.navigate(['admin']);

        }else {

          this.router.navigate(['standard']);
        }
      }
    );


  }

}
