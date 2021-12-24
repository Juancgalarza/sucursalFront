import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalProductoModalComponent } from './sucursal-producto-modal.component';

describe('SucursalProductoModalComponent', () => {
  let component: SucursalProductoModalComponent;
  let fixture: ComponentFixture<SucursalProductoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalProductoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalProductoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
