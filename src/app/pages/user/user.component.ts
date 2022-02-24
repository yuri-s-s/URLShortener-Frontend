import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
  
    });

  passwordForm: FormGroup =new FormGroup({
    password: new FormControl(),
    newPassword: new FormControl(),
    newPasswordRepeat: new FormControl(),
  
    });

  userId!: string;

  constructor(private toastr: ToastrService, private localStorage: LocalStorageService, public userService : UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.userId = this.localStorage.get("id");

    this.userService.getById(
      this.userId,
    ).subscribe(
      (data) => {


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

        this.userForm = this.formBuilder.group({
          name: [data.name],
          email: [data.email],
        })

        this.localStorage.set("name", data.name)
        window.location.reload();
      }
    );
  }

  changePassword(){
    this.userId = this.localStorage.get("id");

    const oldPassword: String = this.passwordForm.get("password")?.value;
    const newPassword: String = this.passwordForm.get("newPassword")?.value;
    const repeatNewPassword: String = this.passwordForm.get("newPasswordRepeat")?.value;

    if (newPassword !== repeatNewPassword) {
      this.toastr.error("As senhas não conferem!");
    }else {

      this.userService.changePassword(
        this.userId,
        {
          "password": oldPassword,
          "newPassword": newPassword,
        }
      ).subscribe( {

        next: () => {
          this.toastr.success("Senha alterada com sucesso!");
          this.passwordForm.reset();
        },

        error: (e) => {

          this.toastr.error("Não foi possível alterar a senha!");

        }
      
      });
    }
  }

}
