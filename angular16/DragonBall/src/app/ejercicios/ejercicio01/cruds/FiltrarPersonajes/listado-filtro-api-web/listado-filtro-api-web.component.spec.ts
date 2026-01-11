import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFiltroApiWebComponent } from './listado-filtro-api-web.component';

describe('ListadoFiltroApiWebComponent', () => {
  let component: ListadoFiltroApiWebComponent;
  let fixture: ComponentFixture<ListadoFiltroApiWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoFiltroApiWebComponent]
    });
    fixture = TestBed.createComponent(ListadoFiltroApiWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
