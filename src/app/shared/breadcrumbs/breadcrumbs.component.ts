import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titleNormal: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.roterFunction();
  }

  ngOnInit() {}

  /**
   * Roters function
   */
  roterFunction() {
    this.getDataRout().subscribe(data => {
      console.log(data);
      this.titleNormal = data.title;
      this.title.setTitle(this.titleNormal);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titleNormal
      };
      this.meta.updateTag(metaTag);
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
