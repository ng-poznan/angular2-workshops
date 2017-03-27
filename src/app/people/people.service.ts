import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map'

const BASE_URL = 'http://swapi.co/api/people';

@Injectable()
export class PeopleService {
  constructor(private http: Http) {}

  public getPeople(page : number | string = 1): Observable<any[]> {
    return this.http.get(`${BASE_URL}?page=${page}`)
      .map((res : Response) => res.json())
      .map(({ results } : any) => results);
  }

  public getPerson(id: string | number): Observable<any> {
    return this.http.get(`${BASE_URL}/${id}/`)
      .map((res : Response) => res.json());
  }
}
