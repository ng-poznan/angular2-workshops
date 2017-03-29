import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  public people = Observable.of([
    { name: 'Person A', height: '250', mass: '180' },
    { name: 'Person B', height: '25', mass: '18' },
    { name: 'Person C', height: '150', mass: '100' }
  ]);

  private apiUrl = 'http://swapi.co/api';

  constructor(private http: Http) { }

  public getPeople(page = 1): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/people?page=${page}`)
      .map((res: Response) => res.json())
      .map(({ results }: any) => results);
  }
}
