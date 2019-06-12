import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  title: string;

  constructor(private router: Router) {
    this.roterFunction();
  }

  ngOnInit() {}

  /**
   * Roters function
   */
  roterFunction() {
    this.getDataRout().subscribe(data => {
      console.log(data);
      this.title = data.title;
    });
  }

  /**
   * Gets data rout
   * @returns
   */
  getDataRout() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
