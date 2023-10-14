import { Component, OnInit } from '@angular/core';
import { Account, User } from '../types';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formData:User = {email:"", name:"", password:"",username:""}
  constructor(private service:AuthService, private router:Router) { }
  

  ngOnInit(): void {
  }

  submitForm():Account {
    let returnAccount: Account = {id:"", email: "", name:""}

    this.service.signUp(this.formData).subscribe((data: Account) => {
      returnAccount = data
    });
    console.log(returnAccount)
    this.router.navigate(['thanks'])
    return returnAccount
  }
}
