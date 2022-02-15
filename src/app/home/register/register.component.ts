import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/shared/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;


  constructor(public registerService: RegisterService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null]
    })

  }

  register() {

    this.registerService.register(
      {
        "name": this.registerForm.get("name")?.value,
        "email": this.registerForm.get("email")?.value,
        "password": this.registerForm.get("password")?.value
      }
    ).subscribe();


  }

}
