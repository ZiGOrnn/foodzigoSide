import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Restaurant, Dish } from '../../data/restaurant';
import { RestaurantListService } from '../../services/restaurant-list/restaurant-list-service';
import { AngularFireDatabase } from 'angularfire2/database';

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
  dishData: Dish ={
    title: '',
    price: undefined
  };
  // public onYourRestaurantForm: FormGroup;

  constructor(private _fb: FormBuilder,private restaurantLS: RestaurantListService, 
    private angularFireDatabase: AngularFireDatabase,public loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.restaurant = this.navParams.get('restaurant');
  }
  ionViewDidLoad() {
    console.log(this.navParams.get('restaurant'));
  }

  // ngOnInit() {
  //   this.onYourRestaurantForm = this._fb.group({
  //     profiledata: [true, Validators.compose([
  //       Validators.required
  //     ])],
  //     restaurantTitle: ['', Validators.compose([
  //       Validators.required
  //     ])],
  //     restaurantAddress: ['', Validators.compose([
  //       Validators.required
  //     ])],
  //     restaurantType: ['', Validators.compose([
  //       Validators.required
  //     ])]
  //   });
  // }
  saveRestaurant(dishData: Dish){
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: 'crescent',
    });
    loader.present();
      this.angularFireDatabase.list(`restaurant-list/${this.restaurant.key}/dish-list`).push(this.dishData)
    .then(()=> loader.dismiss()
    );
  }
}
