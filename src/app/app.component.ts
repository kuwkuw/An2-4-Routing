import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
// rxjs
import { Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { SpinnerService } from './widgets';

import { MessagesService, CustomPreloadingStrategyService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(
    private router: Router,
    public messagesService: MessagesService,
    public spinnerService: SpinnerService,
    private preloadingStrategy: CustomPreloadingStrategyService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    console.log(
      `Preloading Modules: `,
      this.preloadingStrategy.preloadedModules
    );
    // this.setPageTitles();
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  onActivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Activated component:', $event, routerOutlet);
    // another way to set titles
    this.titleService.setTitle(routerOutlet.activatedRouteData.title);
    this.metaService.addTags(routerOutlet.activatedRouteData.meta);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Deactivate component:', $event, routerOutlet);
  }

  onDisplayMessages(): void {
    this.router.navigate([{ outlets: { messages: ['messages'] } }]);
    this.messagesService.isDisplayed = true;
  }

  private setPageTitles() {
    this.sub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data)
      )
      .subscribe(
        data => this.titleService.setTitle(data.title)
      );
  }
}
