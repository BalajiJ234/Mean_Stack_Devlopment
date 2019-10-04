import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../restaurant-service.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {
 @Input() restaurant : Object;
  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
  }

  addFavorite()
  {
    this.restaurantService.addFavourite(this.restaurant).subscribe(data => {
    console.log(data);
    });
  }
}
