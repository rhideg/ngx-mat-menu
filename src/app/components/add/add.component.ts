import { Component, OnInit } from '@angular/core';
import { NgxMatMenuService } from 'projects/ngx-mat-menu/src/public-api';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private menuService: NgxMatMenuService
    ) {
      menuService.changeMenu(true);
      menuService.selectMenu(2);
    
  }

  ngOnInit(): void {
  }

}
