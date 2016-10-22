import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth/auth.service';
import {Http} from 'angular2/http';
import {AuthHttp} from 'angular2-jwt';

/*
  Generated class for the Ping page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ping',
  templateUrl: 'ping.html'
})
export class PingPage {
  message: string;
  error: string;

  constructor(
    public navCtrl: NavController, 
    private auth: AuthService,
    private http: Http, 
    private authHttp: AuthHttp) { }

  ionViewDidLoad() {
    console.log('Hello Ping Page');
  }

  ping() {
    // Change the endpoint up for
    // one that points to your own server.
    this.http.get('http://example.com/ping')
      .map(res => res.json())
      .subscribe(
      data => this.message = data,
      err => this.error = err
      );
  }

  securedPing() {
    // Here we use authHttp to make an authenticated
    // request to the server. Change the endpoint up for
    // one that points to your own server.
    this.authHttp.get('http://example.com/secured/ping')
      .map(res => res.json())
      .subscribe(
      data => this.message = data,
      err => this.error = err
      );
  }
}
