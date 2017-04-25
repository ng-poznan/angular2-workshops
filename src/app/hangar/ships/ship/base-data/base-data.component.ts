import { Component, OnInit } from '@angular/core';
import { source } from '../../../data/source';

@Component({
  selector: 'ds-base-data',
  templateUrl: './base-data.component.html',
  styleUrls: ['./base-data.component.scss']
})
export class BaseDataComponent implements OnInit {

  public get ships(): Array<any> {
    return source.ships;
  }

  constructor() { }

  ngOnInit() {
  }

}
