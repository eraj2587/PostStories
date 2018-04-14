import { Component,OnInit } from '@angular/core';
import { AuthenticationService, UserService } from "./_services/index";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CurrentUser } from "./_models/index";
import { Title }     from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }
    currentUser: CurrentUser;
    collapsed = true;

    constructor(public auth: AuthenticationService,
       private router: Router,
       private titleService: Title, 
       private activatedRoute: ActivatedRoute,
       private userService: UserService) {
      if(auth.isLoggedIn()){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}
      
    }

    toggleCollapsed(): void {
      this.collapsed = !this.collapsed;
    }
  
    logout() {
      this.auth.logout()
      this.router.navigate(['/login']);
    }
  }