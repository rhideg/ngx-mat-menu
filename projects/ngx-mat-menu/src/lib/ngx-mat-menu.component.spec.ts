import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatMenuComponent } from './ngx-mat-menu.component';

describe('NgxMatMenuComponent', () => {
  let component: NgxMatMenuComponent;
  let fixture: ComponentFixture<NgxMatMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
