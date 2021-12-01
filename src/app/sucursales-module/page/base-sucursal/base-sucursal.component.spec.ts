import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSucursalComponent } from './base-sucursal.component';

describe('BaseSucursalComponent', () => {
  let component: BaseSucursalComponent;
  let fixture: ComponentFixture<BaseSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
