import { TestBed } from '@angular/core/testing';

import { NgxMatMenuService } from './ngx-mat-menu.service';

describe('NgxMatMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatMenuService = TestBed.get(NgxMatMenuService);
    expect(service).toBeTruthy();
  });
});
