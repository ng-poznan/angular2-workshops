import { ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, Renderer} from '@angular/core';
import { Badge } from '../stormtrooper.model';

@Component({
  selector: 'ds-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnChanges, DoCheck {
  @Input() badge: Badge;
  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

  ngOnChanges(changes) {
    console.log('Badge changed', changes);
    if (changes.badge.currentValue) {
      this.renderer.setElementStyle(
        this.elementRef.nativeElement.querySelector('p'),
        'background-color',
        changes.badge.currentValue.color
      );
    }
  }
  ngDoCheck() {
    console.log('Badge check');
  }
}
