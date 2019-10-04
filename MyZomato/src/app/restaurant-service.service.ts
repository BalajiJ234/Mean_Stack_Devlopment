import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  favoriteData:Object;
  getRestaurantUrl = "https://developers.zomato.com/api/v2.1/search?count=20&lat=%2011.0168&lon=76.9558";
  addFavoriteUrl = '/api/restaurant/add-favorite';
  constructor(private http:HttpClient) { }

  header = new HttpHeaders({
    'user-key':'0c8cee2614c4302215881f9f07b75a08'
  })
  getRestaurantList(): Observable<any> {
    return this.http.get<any>(this.getRestaurantUrl,{headers:this.header});
  }
  addFavourite(restaurant: any): Observable<any> {
    this.favoriteData = {};
    this.favoriteData['name'] = restaurant.name;
    this.favoriteData['thumb'] = restaurant.thumb;
    this.favoriteData['location'] = restaurant.location;
        return this.http.post<any>(this.addFavoriteUrl, restaurant);
  }
}