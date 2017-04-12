import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  private alderaanDestroyed = false;

  constructor() { }

  ngOnInit() {}

  public destroyAlderaan() {
    this.alderaanDestroyed = true;
  }

}
