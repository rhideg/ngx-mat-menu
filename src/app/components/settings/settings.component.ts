import { Component, OnInit } from '@angular/core';
import { NgxMatMenuService } from 'projects/ngx-mat-menu/src/public-api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private menuService: NgxMatMenuService
  ) {
    menuService.changeMenu(true);
   // menuService.selectMenu(1);
  }

  ngOnInit() {
  }

}
