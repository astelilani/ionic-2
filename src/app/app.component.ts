import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import {Push, PushToken} from '@ionic/cloud-angular';
import {ProfilePage} from '../pages/profile/profile';
import {Deploy} from '@ionic/cloud-angular';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = ProfilePage;

  constructor(platform: Platform, public push: Push, public deploy: Deploy) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      
      //Register push notifications
      this.push.register().then((t: PushToken) => { 
          console.log("My Device token:",t.token);
          return this.push.saveToken(t);
        }).then((t: PushToken) => {
          console.log('Token saved:', t.token);
        });
      });
    
      //Subscribe Push Notifications
      this.push.rx.notification()
      .subscribe((msg) => {
        alert(msg.title + ': ' + msg.text);
      });
   
    
  }
}
