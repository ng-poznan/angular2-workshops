import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AuthorizationService } from '../core/services/authorization.service';

@Component({
  selector: 'ds-command-center',
  templateUrl: './command-center.component.html',
  styleUrls: ['./command-center.component.scss']
})
export class CommandCenterComponent implements OnInit {
  private controlPanelOpen: boolean;
  private buttonText: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthorizationService) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.controlPanelOpen = event.url === '/command-center/control-panel';
        this.buttonText = this.controlPanelOpen ? 'Close control panel' : 'Open control panel';
      }
    });
  }

  public toggleControlPanel() {
    this.controlPanelOpen ?
      this.router.navigate(['command-center']) :
      this.router.navigate(['control-panel'], {relativeTo: this.route});
  }

  public authorizeVader() {
    this.authService.toggleAuthorization()
  }
}
