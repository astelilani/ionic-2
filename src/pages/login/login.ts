import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {Platform} from 'ionic-angular';
// import {Http} from 'angular2/http';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:string;
  password: string;

  constructor(
    public navCtrl: NavController
    // public platform: Platform, 
    // public http: Http
    ) {}

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  login() {
    // this.authenticationApi.login(this.username, this.password).subscribe(
    //       data => {      
    //         //Navigate to home page              
    //         this.nav.setRoot(HelloIonicPage);
    //       }
    //   )
  }
}
