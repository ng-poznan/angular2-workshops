import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ShipsService {
  private ships = [
    {
      id: 'I121',
      type: 'Interceptor',
      image: './assets/images/TIE_Interceptor.jpg'
    }, {
      id: 'I122',
      type: 'Interceptor',
      image: './assets/images/TIE_Interceptor.jpg'
    }, {
      id: 'I123',
      type: 'Interceptor',
      image: './assets/images/TIE_Interceptor.jpg'
    }, {
      id: 'I124',
      type: 'Interceptor',
      image: './assets/images/TIE_Interceptor.jpg'
    }, {
      id: 'B232',
      type: 'Bomber',
      image: './assets/images/TIE_Bomber.jpg'
    }, {
      id: 'B233',
      type: 'Bomber',
      image: './assets/images/TIE_Bomber.jpg'
    }, {
      id: 'B234',
      type: 'Bomber',
      image: './assets/images/TIE_Bomber.jpg'
    }, {
      id: 'S331',
      type: 'Starfighter',
      image: './assets/images/TIE_fighter.png'
    }, {
      id: 'S332',
      type: 'Starfighter',
      image: './assets/images/TIE_fighter.png'
    }, {
      id: 'S333',
      type: 'Starfighter',
      image: './assets/images/TIE_fighter.png'
    }, {
      id: 'S334',
      type: 'Starfighter',
      image: './assets/images/TIE_fighter.png'
    }
  ];

  constructor() { }

  public getShips(type) {
    return !type ? Observable.of(this.ships) : Observable.of(this.ships.filter(ship => ship.type.toLowerCase() === type));
  }
}
