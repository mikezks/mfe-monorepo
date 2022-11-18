import { Component, inject, VERSION } from '@angular/core';
import { Route, UrlSegment, Router, NavigationEnd } from '@angular/router';
import { filter, take, delay } from 'rxjs';
@Component({
  selector: 'mfe-workspace-passenger-shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngVersion = VERSION.full;
  title = 'Hello World!';
}
