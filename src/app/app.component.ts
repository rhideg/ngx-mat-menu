import { Component } from '@angular/core';
import { Theme, MenuOptions } from 'projects/ngx-mat-menu/src/lib/interfaces/menu-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  themeSidebar: Theme;
  themeHeader: Theme;
  arrMenuOptions: MenuOptions[];
  badgeColor: any;
  loginRoute: string;
  logoutIcon: any;
  srcLogo: string;
  heightLogo: string;
  widthLogo: string;
  lang: string;
  visibleNotif: boolean;
  badge: number = 1;

  constructor(
    private router: Router
  ) {

    this.themeSidebar = {background: '#e53935', color: 'white'};
    this.themeHeader = {background: 'white', color: 'gray'};
    this.arrMenuOptions = [
      {id: 0, title: 'Home', icon: 'home', route: 'home'},
      {id: 1, title: 'Settings', icon: 'settings', route: 'settings'},
      {id: 2, title: 'Add', icon: 'add', route: 'add'},
      {id: 3, title: 'Edit', icon: 'edit', route: 'edit'},
      {id: 4, title: 'Delete', icon: 'delete', route: 'delete'},
      {id: 5, title: 'List', icon: 'list', route: 'list'},
    ];
    this.badgeColor = 'white';
    this.logoutIcon = undefined;
    this.srcLogo = 'assets/de_logo_new.png';
    this.lang = 'en';
    this.visibleNotif = true;
  }

  openNotif(event) {
    console.log(event);
    this.badge = 0;
  }
  logout() {
    console.log("logout")
    this.router.navigate(['']);
  }
}
