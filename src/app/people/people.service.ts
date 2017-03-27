import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map'

import { API_URL } from './../core/tokens/core.tokens';

@Injectable()
export class PeopleService {
  constructor(private http: Http, @Inject(API_URL) private apiUrl) {}

  public getPeople(page : number | string = 1): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/people?page=${page}`)
      .map((res : Response) => res.json())
      .map(({ results } : any) => results);
  }

  public getPerson(id: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/people/${id}/`)
      .map((res : Response) => res.json());
  }
}
