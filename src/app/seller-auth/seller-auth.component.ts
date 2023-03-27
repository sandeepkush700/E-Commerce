import { SignUP } from './../data-types';
import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  result: any;
  showLogin = false;
  authError: string = '';
  constructor(private seller: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.seller.reloadseller()
  }

  SignUp(data: SignUP) {
    // console.log(data)
    this.seller.userSignUp(data);

  }
  Login(data: SignUP) {
    this.authError='';
    this.seller.userLogin(data);
    console.log("login data",data)
    this.seller.isLogginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Email or password is not correct";
      }
    })
  }

  openlogin(): void {
    this.showLogin = true
  }
  openSignUp() {
    this.showLogin = false

  }

}
