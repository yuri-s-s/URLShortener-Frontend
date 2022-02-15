import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: Boolean = true;

  constructor() {

  }

  ngOnInit(): void {


  }


  changeComponent() {
    this.login = !this.login;
  }

}
