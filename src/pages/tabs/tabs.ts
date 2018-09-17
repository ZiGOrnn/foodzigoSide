import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home'


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
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
