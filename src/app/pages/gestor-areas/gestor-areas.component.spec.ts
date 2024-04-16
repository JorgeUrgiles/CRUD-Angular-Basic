import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorAreasComponent } from './gestor-areas.component';

describe('GestorAreasComponent', () => {
  let component: GestorAreasComponent;
  let fixture: ComponentFixture<GestorAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestorAreasComponent]
    });
    fixture = TestBed.createComponent(GestorAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
