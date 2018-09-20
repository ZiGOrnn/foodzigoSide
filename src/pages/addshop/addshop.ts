import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Restaurant, RestaurantItem } from '../../data/restaurant';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { RestaurantListService } from '../../services/restaurant-list/restaurant-list-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the AddshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addshop',
  templateUrl: 'addshop.html',
})
export class AddshopPage {

  restaurant$: Observable<Restaurant[]>
  restaurantUid: Observable<any>;
  restaurant: Restaurant = {
    title: '',
    address: '',
    type: '',
  };

  public onYourRestaurantForm: FormGroup;

  constructor(private angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase,
    private restaurantLS: RestaurantListService, 
    private _fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, 
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

      this.restaurant$ = this.restaurantLS
      .getRestaurantList().snapshotChanges().map(caches => {
        return caches.map(c =>({
          key: c.payload.key, ...c.payload.val()
        }));
      });

      this.angularFireAuth.authState.subscribe(data =>{
        this.restaurantUid = this.angularFireDatabase.object(`restaurant-item/${data.uid}`).valueChanges();
      });

  }

  ionViewDidLoad() {
    console.log(this.restaurantUid);
  }

  addRestaurant(restaurant: Restaurant) {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      spinner: 'crescent',
    });
    loader.present();
    this.angularFireAuth.authState.take(1).subscribe(auth =>{
      this.angularFireDatabase.object(`restaurant-item/${auth.uid}`).set(this.restaurant);
    });
    this.restaurantLS.addRestaurant(restaurant).then(ref =>{
      console.log(ref.key);
      loader.dismiss();
    });
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

  // process send button
  sendData() {

  }

}

