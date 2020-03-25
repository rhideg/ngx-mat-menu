import { Component, OnInit } from '@angular/core';
import { NgxMatMenuService } from 'projects/ngx-mat-menu/src/public-api';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private menuService: NgxMatMenuService
    ) {
      menuService.changeMenu(true);
      menuService.selectMenu(4); }

  ngOnInit(): void {
  }

}
