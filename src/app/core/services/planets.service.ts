import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';

import { API_URL } from '../tokens/core.tokens';

@Injectable()
export class PlanetsService {
  constructor(private http: Http, @Inject(API_URL) private apiUrl) {}

  public getPlanets(page : string | number = 1): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/planets?page=${page}`)
      .map((res : Response) => res.json())
      .map(({ results }: any) => results);
  }

  public getPlanet(id : string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/planets/${id}/`)
      .map((res : Response) => res.json());
  }
}
