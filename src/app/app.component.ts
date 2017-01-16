import { Component, OnInit } from '@angular/core';
import { HttpWrapper } from '@briisk/http-wrapper';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public luke$: Observable<Response>;

  constructor(private http: HttpWrapper) {
    this.http.setBaseUrl('http://swapi.co/api/');
    this.http.setHeader('Content-Type', 'application/vnd.api+json');
  }

  ngOnInit() {
    this.luke$ = this.http.get('people/1/');
  }
}
