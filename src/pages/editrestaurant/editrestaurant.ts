import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Restaurant } from '../../data/restaurant';
import { RestaurantListService } from '../../services/restaurant-list/restaurant-list-service';

/**
 * Generated class for the EditrestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editrestaurant',
  templateUrl: 'editrestaurant.html',
})
export class EditrestaurantPage {

  restaurant: Restaurant;

  public onYourRestaurantForm: FormGroup;

  constructor(private _fb: FormBuilder,private restaurantLS: RestaurantListService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.restaurant = this.navParams.get('restaurant');
  }
  ionViewDidLoad() {
    console.log(this.navParams.get('restaurant'));
  }

  ngOnInit() {
    this.onYourRestaurantForm = this._fb.group({
      profiledata: [true, Validators.compose([
        Validators.required
      ])],
      restaurantTitle: ['', Validators.compose([
        Validators.required
      ])],
      restaurantAddress: ['', Validators.compose([
        Validators.required
      ])],
      restaurantType: ['', Validators.compose([
        Validators.required
      ])]
    });
  }
  saveRestaurant(restaurant: Restaurant){
    this.restaurantLS.editRestaurant(restaurant).then(()=>{
      this.navCtrl.pop();
    });
  }
}
