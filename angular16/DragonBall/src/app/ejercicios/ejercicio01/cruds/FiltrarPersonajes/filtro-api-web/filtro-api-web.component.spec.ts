import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroApiWebComponent } from './filtro-api-web.component';

describe('FiltroAPIComponent', () => {
  let component: FiltroApiWebComponent;
  let fixture: ComponentFixture<FiltroApiWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroApiWebComponent]
    });
    fixture = TestBed.createComponent(FiltroApiWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
