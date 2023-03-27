import { BehaviorSubject, observable } from 'rxjs';
import { Login, SignUP } from './../data-types';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLogginError = new EventEmitter<boolean>(false)


  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: SignUP) {

    console.log("seller services")
    this.http.post("http://localhost:3000/seller", data, { observe: 'response' }).subscribe((result: any) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      console.log('result', result)
    });
    // let abc = this.http.post("http://local3000host:/seller", data, { observe: 'response' }).subscribe((result) => {
    //   this.isSellerLoggedIn.next(true);
    //   this.router.navigate(['seller-home'])
    // });
    // console.log(abc)
    // return false

  }
  reloadseller(): void {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data: Login) {
    console.log(data)
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: "response" }).subscribe((result: any) => {
      console.log(result);
      if (result && result.body && result.body.length) {

        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        console.warn(" user logged in");

      }
      else {
        this.isLogginError.emit(true)
        console.warn("not loggined in")
      }
    })
  }


}
