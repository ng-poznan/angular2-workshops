import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import { Stormtrooper } from './stormtrooper.model';

@Component({
  selector: 'ds-barracks',
  templateUrl: './barracks.component.html',
  styleUrls: ['./barracks.component.scss']
})
export class BarracksComponent implements OnChanges, DoCheck {
  public stormtroopers: Stormtrooper[] = [{
    name: 'Storm one',
    badge: {
      color: 'darkred',
      rank: 'Sgt.',
    }
  }, {
    name: 'Storm two',
    badge: {
      color: 'darkred',
      rank: 'Sgt.',
    }
  }, {
    name: 'Storm three',
    badge: {
      color: 'darkred',
      rank: 'Sgt.',
    }
  }, {
    name: 'Storm four',
    badge: {
      color: 'darkred',
      rank: 'Sgt.',
    }
  }, {
    name: 'Storm five',
    badge: {
      color: 'darkred',
      rank: 'Sgt.',
    }
  }];
  public name: string;

  changeColor() {
    this.stormtroopers[4].badge = Object.assign({}, this.stormtroopers[4].badge, { color: 'green' });
  }

  changeName() {
    this.stormtroopers[4].name = this.name;
  }

  ngOnChanges(changes) {
    console.log('Barracks changed', changes);
  }
  ngDoCheck() {
    console.log('Barracks check');
  }
}
