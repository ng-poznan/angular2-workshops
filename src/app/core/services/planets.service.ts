import {  Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanetsService {

  public planets = Observable.of([
    { name: 'Mercury', gravity: '0.378', population: '2', diameter: '4.879' },
    { name: 'Venus', gravity: '0.904', population: '1', diameter: '12.000' },
    { name: 'Earth', gravity: '1.000', population: '7.100.000.000', diameter: '12.500' }
  ]);

  private apiUrl = 'http://swapi.co/api';

  constructor(private http: Http) { }

  public getPlanets(page = 1): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/planets?page=${page}`)
      .map((res: Response) => res.json())
      .map(({ results }: any) => results);
  }
}
