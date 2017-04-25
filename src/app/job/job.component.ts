import { Component, OnInit } from '@angular/core';
import { source } from './data/source';

@Component({
  selector: 'ds-careers',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  public source: any;

  constructor() { }

  ngOnInit() {
    this.source = source;
  }

}
