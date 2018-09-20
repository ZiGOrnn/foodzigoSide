import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Restaurant, Dish } from "../../data/restaurant";


@Injectable()
export class RestaurantListService{

    private restaurantListRef = this.angularFireDatabase.list<Restaurant>('restaurant-list');
    private dish = this.angularFireDatabase.list<Dish>(`dish-list/`);

    constructor(private angularFireDatabase: AngularFireDatabase,){
    
    }
    getRestaurantList(){
        return this.restaurantListRef;  
    }

    addRestaurant(restaurant: Restaurant){
        return this.restaurantListRef.push(restaurant);
    }

    editRestaurant(dish: Dish){
        // return this.restaurantListRef.update(restaurant.key, restaurant);
        return this.dish.push(dish);
    }

}