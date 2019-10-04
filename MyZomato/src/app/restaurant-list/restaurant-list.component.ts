import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './../restaurant-service.service';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurantList : any;
  constructor(private restaurantService : RestaurantService ) { }

  ngOnInit() {
    this.getRestaurant();
  }
  getRestaurant():void{
     this.restaurantService.getRestaurantList().subscribe(list =>{
       this.restaurantList = list.restaurants;
       console.log(this.restaurantList);
     })
  }

}
