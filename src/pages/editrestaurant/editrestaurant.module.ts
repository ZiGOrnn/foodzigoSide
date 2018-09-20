import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditrestaurantPage } from './editrestaurant';

@NgModule({
  declarations: [
    EditrestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(EditrestaurantPage),
  ],
})
export class EditrestaurantPageModule {}
