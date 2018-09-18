import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { AngularFireAuth } from 'angularfire2/auth'


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  [x: string]: any;

  tab1Root = HomePage;
  tab2Root = 'FeedPage';
  tab3Root = 'CartPage';
  con = 1;


  constructor(private angularFireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private toast: ToastController) {
  
  }

  ionViewDidLoad() {
    this.angularFireAuth.authState.subscribe(data => {
      if (data.email) {
        this.toast.create({
          message: `Welcom to APP_NAME, ${data.email}`,
          duration: 3000,
          position: 'top'
        }).present();
      }
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
