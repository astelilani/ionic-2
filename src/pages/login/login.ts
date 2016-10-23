
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import {TabsPage} from '../pages/tabs/tabs';

let details: UserDetails = { 'email': 'hi@ionic.io', 'password': 'puppies123' };

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public auth: Auth, public user: User) {

  }

  signup() {
    this.auth.signup(details).then(() => {
      // `this.user` is now registered
    }, (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        if (e === 'conflict_email') {
          alert('Email already exists.');
        } else {
          // handle other errors
        }
      }
    });
  }

  login(){
    this.auth.login('basic', details).then(() => {
      this.navCtrl.push(TabsPage);
    });
  }

  logout(){
    this.auth.logout();
  }
}
