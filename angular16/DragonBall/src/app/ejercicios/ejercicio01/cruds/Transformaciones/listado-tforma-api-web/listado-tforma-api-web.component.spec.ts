import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTFormaApiWebComponent } from './listado-tforma-api-web.component';

describe('ListadoTFormaApiWebComponent', () => {
  let component: ListadoTFormaApiWebComponent;
  let fixture: ComponentFixture<ListadoTFormaApiWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoTFormaApiWebComponent]
    });
    fixture = TestBed.createComponent(ListadoTFormaApiWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
