import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-price',
  templateUrl: 'price.html',
})
export class PricePage {
  currentNumber = 1;
  cart = 190;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PricePage');
  }
  incrementQty(){
    this.currentNumber--;
    if(this.currentNumber <= 0){
      this.currentNumber = 1;
    }
    this.cart = 190;
    this.cart *= this.currentNumber;
  }
  
  decrementQty(){
    this.currentNumber++;
    this.cart = 190;
    this.cart *= this.currentNumber;
  }
  onCart(){
    this.navCtrl.push('CartPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
}
