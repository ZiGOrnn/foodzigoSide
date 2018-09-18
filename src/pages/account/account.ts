import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../data/profile';
import { TabsPage } from '../tabs/tabs';
import { Observable } from 'rxjs';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  profile = {} as Profile;
  profileData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  
    this.angularFireAuth.authState.subscribe(data => {
      this.profileData = angularFireDatabase.object(`profile/${data.uid}`).valueChanges();
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  createProfile() {
    this.angularFireAuth.authState.take(1).subscribe(auth => {
      this.angularFireDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(() => this.navCtrl.push(TabsPage));
    });
  }
}
