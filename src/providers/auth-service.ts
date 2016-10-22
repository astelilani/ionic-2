import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt';
import {HomePage} from '../pages/home/home';
import { Storage } from '@ionic/storage';
import {LoginPage} from '../pages/login/login';
// import { tokenNotExpired } from 'angular2-jwt';
// import { Router } from 'angular2/router';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  lock = new Auth0Lock('fiE1X2rt3hRQrvH6enwZZtUrHauWwHDb', 'ast.auth0.com');
  local: Storage ;

  constructor(
    public http: Http, 
    private nav: NavController, 
    private auth: AuthHttp,
    local : Storage  ){
    this.local = local;
    console.log('Hello AuthService Provider');
    this.lock.on('authenticated', (authResult: any) => {
      this.local.set('id_token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        }
      this.local.set('profile', JSON.stringify(profile));
    });
    this.lock.hide();
  });
}

  login() {
      this.lock.show();  
  }
    
  logout() {
      // To log out, just remove the token and profile
      // from local storage
      this.local.remove('profile');
      this.local.remove('id_token');

      // Send the user back to the dashboard after logout
      // this.router.navigateByUrl('/dashboard');
      this.nav.push(LoginPage);

  }
}