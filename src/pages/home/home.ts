import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  [x: string]: any;

  menuRestaurant: Array<{ title: string, address: string, component: any, number: string, id: number }>;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

    this.menuRestaurant = [
      { title: 'ร้านอาหารลุงไข่', address: 'Mahasarakham', component: 'MenuPage', number: '4.4', id: 1 },
      { title: 'ร้านอาหารลุงติ๋ม', address: 'Mahasarakham', component: 'MenuPage', number: '3.5', id: 2 },
      { title: 'ร้านอาหารลุงต้อย', address: 'Mahasarakham', component: 'MenuPage', number: '4.0', id: 3 },
      { title: 'ร้านอาหารลุงยัง', address: 'Mahasarakham', component: 'MenuPage', number: '4.5', id: 4 },
      { title: 'ร้านอาหารลุงคอย', address: 'Mahasarakham', component: 'MenuPage', number: '3.8', id: 5 },
      { title: 'ร้านอาหารลุงนาน', address: 'Mahasarakham', component: 'MenuPage', number: '2.5', id: 6 },
      { title: 'ร้านอาหารลุงขนุน', address: 'Mahasarakham', component: 'MenuPage', number: '4.2', id: 7 },
      { title: 'ร้านอาหารลุงก้อย', address: 'Mahasarakham', component: 'MenuPage', number: '3.0', id: 8 },
      { title: 'ร้านอาหารต้นมัน', address: 'Mahasarakham', component: 'MenuPage', number: '2.0', id: 9 },
      { title: 'ร้านอาหารหอยหลอด', address: 'Mahasarakham', component: 'MenuPage', number: '3.5', id: 10 },
      { title: 'ร้านอาหารก้อยปลา', address: 'Mahasarakham', component: 'MenuPage', number: '3.8', id: 11 },
      { title: 'ร้านอาหารน่าน', address: 'Mahasarakham', component: 'MenuPage', number: '4.5', id: 12 }

    ];
  }

  openRestaurant(page) {
    this.nav.setRoot(page.component);
  }

  openPage() {
    this.navCtrl.push(LoginPage);
  }
  onFood() {
    this.navCtrl.push('MenuPage')
  }
  addClick(){
    this.navCtrl.push('AddshopPage');
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
