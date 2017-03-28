import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';

import { API_URL } from '../tokens/core.tokens';

@Injectable()
export class PlanetsService {
  constructor(
    @Inject(API_URL) private apiUrl,
    private http: Http
  ) { }

  public getPlanets(page = 1): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/planets?page=${page}`)
      .map((res: Response) => res.json())
      .map(({ results }: any) => results);
  }
}
