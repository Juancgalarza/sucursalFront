import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseProductoComponent } from './base-producto.component';

describe('BaseProductoComponent', () => {
  let component: BaseProductoComponent;
  let fixture: ComponentFixture<BaseProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
