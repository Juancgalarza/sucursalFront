import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductosComprasComponent } from './add-productos-compras.component';

describe('AddProductosComprasComponent', () => {
  let component: AddProductosComprasComponent;
  let fixture: ComponentFixture<AddProductosComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductosComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductosComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
