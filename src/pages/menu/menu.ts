import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  pet: string = "Menu";
  price = [190, 120, 90, 80, 200];
  total = 0;
  food = "FOODZIGO";
  pathImg = "../../assets/imgs/F.png";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  onFood() {
    this.total = this.total + this.price[0];
    console.log("ราคา" + this.total);
    this.navCtrl.push('PricePage');
  }
  openDish() {
    this.navCtrl.push('PricePage');
  }
  disFood() {
    this.total = this.total - this.price[0];
    console.log("ราคา" + this.total);
  }

  goBack() {
    this.navCtrl.pop();
  }
}
