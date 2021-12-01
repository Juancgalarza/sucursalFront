import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSucursalComponent } from './listar-sucursal.component';

describe('ListarSucursalComponent', () => {
  let component: ListarSucursalComponent;
  let fixture: ComponentFixture<ListarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
