import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseProveedorComponent } from './base-proveedor.component';

describe('BaseProveedorComponent', () => {
  let component: BaseProveedorComponent;
  let fixture: ComponentFixture<BaseProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
