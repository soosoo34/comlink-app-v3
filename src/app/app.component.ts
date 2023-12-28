import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  showNavbar = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute.root)
      )
      .subscribe(route => {
        let currentRoute = route;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        if (currentRoute.snapshot.data['hideNavbar']) {
          this.showNavbar = false;
        } else {
          this.showNavbar = true;
        }
      });
  }
}
