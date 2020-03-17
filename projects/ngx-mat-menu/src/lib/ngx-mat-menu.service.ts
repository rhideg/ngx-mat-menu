import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxMatMenuService {

  showMenu: boolean;
  selectedMenu: number;

  changeMenuSelect: Subject<number> = new Subject<number>();
  changeShowMenu: Subject<boolean> = new Subject<boolean>();

  constructor() {

  }

  public selectMenu(selected: number): void {
    this.selectedMenu = selected;
    this.changeMenuSelect.next(this.selectedMenu);
  }

  public getSelectedMenu(): number {
    return this.selectedMenu;
  }

  public changeMenu(show: boolean): void {
    this.showMenu = show;
    this.changeShowMenu.next(this.showMenu);
  }

}
