import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { User } from '../../data/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  pet: string = "login";

  user = {} as User;

  constructor(private angularFireAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  async login(user: User) {
    try {
      const resulr = await this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(resulr){
        this.navCtrl.setRoot(TabsPage);
        this.menuCtrl.enable(true);
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  async register(user: User) {
    try {
      const resulr = await this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(resulr);
    }
    // if (resulr){
    //   this.navCtrl.push('TabsPage');
    // }
    catch (e) {
      console.error(e);
    }
  }



}
