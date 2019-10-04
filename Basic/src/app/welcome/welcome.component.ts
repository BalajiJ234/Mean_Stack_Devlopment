import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  istrue=false;
  succes="success"
  iserror=false;
  name =""
  date = new Date()
  constructor() { }
 
  ngOnInit() {
  }
  onclick=()=>{
console.log("click")
this.istrue=!this.istrue

  }

}
