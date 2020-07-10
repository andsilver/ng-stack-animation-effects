import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStackEffectsComponent } from './ngx-stack-effects.component';

describe('NgxStackEffectsComponent', () => {
  let component: NgxStackEffectsComponent;
  let fixture: ComponentFixture<NgxStackEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStackEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStackEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
