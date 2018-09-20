import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Restaurant } from "../../data/restaurant";


@Injectable()
export class RestaurantListService{
    private restaurantListRef = this.angularFireDatabase.list<Restaurant>('restaurant-list')

    constructor(private angularFireDatabase: AngularFireDatabase,){
    
    }
    getRestaurantList(){
        return this.restaurantListRef;  
    }

    addRestaurant(restaurant: Restaurant){
        return this.restaurantListRef.push(restaurant);
    }

    editRestaurant(restaurant: Restaurant){
        return this.restaurantListRef.update(restaurant.key, restaurant);
    }
}