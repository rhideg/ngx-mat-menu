import { Component, OnInit } from '@angular/core';
import { NgxMatMenuService } from 'projects/ngx-mat-menu/src/public-api';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private menuService: NgxMatMenuService
    ) {
      menuService.changeMenu(true);
      menuService.selectMenu(3); }

  ngOnInit(): void {
  }

}
