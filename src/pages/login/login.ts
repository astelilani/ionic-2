
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Auth, User, UserDetails, IDetailedError} from '@ionic/cloud-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public auth: Auth, public user: User) {

  }

}
