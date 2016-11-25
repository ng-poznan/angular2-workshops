import { Component, OnInit } from '@angular/core';
import { HttpWrapper } from '@briisk/http-wrapper';
import 'rxjs/operator/map';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public luke: any;

  constructor(
    private http: HttpWrapper
  ) {
    this.http.setBaseUrl('http://swapi.co/api/');
    this.http.setHeader('Content-Type', 'application/vnd.api+json');
  }

  ngOnInit() {
    this.http.get('people/1/').subscribe((data) => {
      this.luke = data;
    });
  }
}
