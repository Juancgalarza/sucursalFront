import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSucursalComponent } from './page-sucursal.component';

describe('PageSucursalComponent', () => {
  let component: PageSucursalComponent;
  let fixture: ComponentFixture<PageSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
