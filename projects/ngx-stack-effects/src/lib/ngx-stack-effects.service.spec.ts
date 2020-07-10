import { TestBed } from '@angular/core/testing';

import { NgxStackEffectsService } from './ngx-stack-effects.service';

describe('NgxStackEffectsService', () => {
  let service: NgxStackEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStackEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
