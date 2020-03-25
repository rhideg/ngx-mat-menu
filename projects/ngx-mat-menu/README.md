# Angular Material Menu

⚡ Try it on [StackBlitz](https://stackblitz.com/edit/angular-lnjubx)!

![Menu](https://i.imgur.com/ZzhkPx1.png "Material Menu")

# Getting started

## Installation:

Install via npm package manager

`npm i ngx-mat-menu`

### Prerequisites:

```bash
  npm i -s @angular/flex-layout
```

```bash
 ng add @angular/material
```

## Usage:

### Inputs:

```js
  @Input() themeSidebar: Theme; // {background: 'white', color: 'black'};
  @Input() themeHeader: Theme; // {background: 'white', color: 'black'};
  @Input() arrMenuOptions: Array<MenuOptions>; // required. List of menu items.
  @Input() headerText: string; // required, Header text e.g. current user. 
  @Input() headerIcon: string; // optional, Header icon next to header text.
  @Input() logoutIcon: string; // optional, lgout icon next to logout text.
  @Input() badgeColor: string; // optional, default is black, color of menu item selects
  @Input() srcLogo: string; // optional, logo at teh top line.
  @Input() heightLogo: string; // optional, height of the logo.
  @Input() widthLogo: string; // optional, width of the logo.
  @Input() lang: string; // optional default is en (see below in switch)
  @Input() visibleNotif: boolean; // optional, default is false/undefined, notification badge
  @Input() badge: number; // number of notifications
  @Input() defaultWidth: string; // default width of the menu sidebar
  @Input() colorSidebarHeader: string; // sidebar header text color
  @Input() borderHeader: string; // border style of the header line(top)
  @Input() borderSidebar: string; // border style of the sidebar(left)
  @Input() borderSidebarHeader: string; // border style of the sidebar header(left)
  @Input() borderSidebarFooter: string; // border style of the sidebar footer(left)
  @Input() borderMenuItems: string; // border style of the sidebar menu items(left)

  @Output() openNotif = new EventEmitter(); // event on notifications click()
  @Output() logoutEvent = new EventEmitter(); // event on logout click()
```

### Module:

Import `ngx-mat-menu`

```javascript

import { NgxMatMenuModule } from  'ngx-mat-menu';

@NgModule({

imports: [ NgxMatMenuModule ]

})

```

### HTML:

Add `ngx-mat-menu`

```html
<ngx-mat-menu
  style="height: 100%;width: 100%;"
  [arrMenuOptions]="arrMenuOptions"
  [headerText]="headerText"
  [badgeColor]="badgeColor"
  [headerIcon]="headerIcon"
  [logoutIcon]="logoutIcon"
  [srcLogo]="srcLogo"
  [heightLogo]="heightLogo"
  [widthLogo]="widthLogo"
  [lang]="lang"
  [themeSidebar]="themeSidebar"
  [themeHeader]="themeHeader"
  [visibleNotif]="visibleNotif"
  [badge]="badge"
  [colorSidebarHeader]="'white'"
  [defaultWidth]="'400px'"
  (openNotif)="openNotif($event)"
  (logoutEvent)="logout()"
>
  <router-outlet></router-outlet>
</ngx-mat-menu>
```

### TypeScript:

```javascript

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuOptions, Theme } from "ngx-mat-menu";
...
themeSidebar: Theme;
themeHeader: Theme;
arrMenuOptions: MenuOptions[];
headerText: string;
badgeColor: any;
loginRoute: string;
headerIcon: string;
logoutIcon: any;
srcLogo: string;
heightLogo: string;
widthLogo: string;
lang: string;
visibleNotif: boolean;
badge: number = 1;

constructor() {
    this.themeSidebar = { background: "#e53935", color: "white" };
    this.themeHeader = { background: "white", color: "gray" };
    this.arrMenuOptions = [
      { id: 0, title: "HOME", icon: null, route: "home" }, // example component to navigate
      { id: 1, title: "SETTINGS", icon: null, route: "settings" }, // example component to navigate
    ];
    this.headerText = "current_user";
    this.badgeColor = "white";
    this.headerIcon = "person";
    this.logoutIcon = "reply";
    this.srcLogo = "https://imgur.com/rNZ9Ncz.png";
    this.lang = "en";
    this.visibleNotif = true;
}

openNotif(event) {
  this.badge = 0;
}

logout() {
  this.router.navigate(['']);
}

```

## Models:

### MenuOptions:

```javascript
export interface MenuOptions {
  id: number;
  title: string;
  icon?: string;
  route: string;
}
```

### Theme:

```javascript
export interface Theme {
  background: string;
  color: string;
}
```

### Show/hide menu in components (e.g. LoginComponent):

```javascript

// LoginComponent (hide on login)
import { Component, OnInit } from '@angular/core';
import { NgxMatMenuService } from 'ngx-mat-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private menuService: NgxMatMenuService,
    private router: Router
  ) {
    menuService.changeMenu(false);
  }

  ngOnInit() {
  }

  btnLogin_Click() {
    this.router.navigate(['home']); // example component to navigate
  }

}
```
