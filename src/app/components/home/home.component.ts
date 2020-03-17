import { Component, OnInit } from '@angular/core';
import { NgxMatMenuService } from 'projects/ngx-mat-menu/src/public-api';
import { MatDialog } from '@angular/material/dialog';
import { DialogTestComponent } from 'src/app/dialogs/dialog-test/dialog-test.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  oraallas: string;
  counter: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', oraallas:'213123', counter:123213123},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',oraallas:'213123', counter:123213123},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',oraallas:'213123', counter:123213123},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',oraallas:'213123', counter:123213123},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', oraallas:'213123', counter:123213123, },
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', oraallas:'213123', counter:123213123},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', oraallas:'213123', counter:123213123},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', oraallas:'213123', counter:123213123},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', oraallas:'213123', counter:123213123},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', oraallas:'213123', counter:123213123},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'oraallas', 'counter','a', 's', 'd', 'f', 'g','h', 'j', 'k', 'l','m'];
  dataSource = ELEMENT_DATA;
  mutat: boolean = true;

  constructor(
    private menuService: NgxMatMenuService,
    public dialog: MatDialog
  ) {
    menuService.changeMenu(true);
    menuService.selectMenu(0);
    
   }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogTestComponent, {
      width: '90%',
      height: '500hv',
      data: {name: 'test', message: 'Test Dialog'}
    });

  }
  changeMenu() {
    this.mutat = !this.mutat;
    this.menuService.changeMenu(this.mutat);
  }

}
