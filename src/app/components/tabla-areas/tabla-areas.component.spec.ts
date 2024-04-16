import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAreasComponent } from './tabla-areas.component';

describe('TablaAreasComponent', () => {
  let component: TablaAreasComponent;
  let fixture: ComponentFixture<TablaAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaAreasComponent]
    });
    fixture = TestBed.createComponent(TablaAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
