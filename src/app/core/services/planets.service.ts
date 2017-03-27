import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';

const BASE_URL : string = 'http://swapi.co/api/planets';

@Injectable()
export class PlanetsService {
  constructor(private http: Http) {}

  public getPlanets(page : string | number = 1): Observable<any[]> {
    return this.http.get(`${BASE_URL}?page=${page}`)
      .map((res : Response) => res.json())
      .map(({ results }: any) => results);
  }

  public getPlanet(id : string | number): Observable<any> {
    return this.http.get(`${BASE_URL}/${id}/`)
      .map((res : Response) => res.json());
  }
}
