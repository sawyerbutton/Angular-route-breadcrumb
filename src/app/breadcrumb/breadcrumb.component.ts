import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Breadcrumb} from '../model/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  // even though breadcrumbs$ looks like a function, but actually it is a variable declaration
  // variable declaration need to be placed at the top of the component class
  // breadcrumbs may be are observables from this perspective, but you can also understand it as an object
  // breadcrumbs$ = this.router.events
  //   .pipe(
  //     filter(event => event instanceof NavigationEnd),
  //     map(event => this.buildBreadCrumb(this.activatedRoute.root))
  //   );
  // constructor(
  //   private router: Router,
  //   private activatedRoute: ActivatedRoute
  // ) { }
  //
  // ngOnInit() {
  // }
  // buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<Breadcrumb> = []): Array<Breadcrumb> {
  //   const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Home';
  //   const path = route.routeConfig ? route.routeConfig.path : '';
  //   const nextUrl = `${url}${path}/`;
  //   const breadcrumb = {
  //     label: label,
  //     url: nextUrl
  //   };
  //   const newBreadcrumbs = [...breadcrumbs, breadcrumb];
  //   if (route.firstChild) {
  //     return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
  //   }
  //   return newBreadcrumbs;
  // }
  public breadcrumbs: Breadcrumb[];
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    const breadcrumb = {
      label: 'Home',
      url: ''
    };
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // set breadcrumbs
      const root: ActivatedRoute = this.route.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];

    });
  }
  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []) {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    const children = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length === 0) {
        continue;
      }
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      url += `/${routeURL}`;
      const breadcrumb: Breadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url: url
      };
      breadcrumbs.push(breadcrumb);
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
