import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/shared/services/register.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;


  constructor(private toastr: ToastrService, public registerService: RegisterService, private formBuilder: FormBuilder, private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null]
    })

  }

  register() {

    const name: String = this.registerForm.get("name")?.value;
    const email: String = this.registerForm.get("email")?.value;
    const password: String = this.registerForm.get("password")?.value;


    if (!name) {
      this.toastr.error("O nome é obrigatório!");
    }else if (!email) {
      this.toastr.error("O email é obrigatório");
    }else if (!password || password.length < 8) {
      this.toastr.error("A senha deve conter 8 ou mais caracteres!");
    }else{

      this.registerService.register(
        {
          "name": this.registerForm.get("name")?.value,
          "email": this.registerForm.get("email")?.value,
          "password": this.registerForm.get("password")?.value
        }
      ).subscribe({

        next: (data) => {

          this.localStorage.set("token", data.token)
          this.localStorage.set("roles", data.roles)
          this.localStorage.set("name", data.name)
          this.localStorage.set("id", data.id)

          this.toastr.success("Cadastro efetuado com sucesso!", '', {
            timeOut: 4000
          });
  
          this.router.navigate(['shortener']);

        },

        error: () => {
 
            this.toastr.error("Email já cadastrado");

        }

      });

    }

  }

}
