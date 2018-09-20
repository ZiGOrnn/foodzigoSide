import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';

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


  constructor(private angularFireAuth: AngularFireAuth, public alertCtrl: AlertController, public loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  async login(user: User) {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: 'crescent',
    });
    loader.present();
    try {
      const resulr = await this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (resulr) {
        this.navCtrl.setRoot(TabsPage);
        loader.dismiss();
        this.menuCtrl.enable(true);
      }
    }
    catch (e) {
      const alert = this.alertCtrl.create({
        title: 'ERROR',
        subTitle: 'อีเมลหรือรหัสผ่าน ที่คุณป้อนไม่ถูกต้อง',
        buttons: ['OK']
      });
      loader.dismiss();
      alert.present();
      console.error(e);
    }
  }

  async register(user: User) {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: 'crescent',
    });
    loader.present();
    try {
      const resulr = await this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(resulr);
      if (resulr) {
        this.navCtrl.setRoot(TabsPage);
        loader.dismiss();
        this.menuCtrl.enable(true);
      }
    }
    catch (e) {
      const alert = this.alertCtrl.create({
        title: 'ERROR!',
        subTitle: 'Email นี้มีอยู่แล้ว หรือ Password น้อยกว่า 6 ตัวอักษร!',
        buttons: ['OK']
      });
      loader.dismiss();
      alert.present();
      console.error(e);
    }
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Forgot Password?',
      message: "Enter an email address to request a password change.",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enter',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
