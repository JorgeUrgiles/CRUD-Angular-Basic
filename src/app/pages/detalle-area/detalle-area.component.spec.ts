import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAreaComponent } from './detalle-area.component';

describe('DetalleAreaComponent', () => {
  let component: DetalleAreaComponent;
  let fixture: ComponentFixture<DetalleAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAreaComponent]
    });
    fixture = TestBed.createComponent(DetalleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
