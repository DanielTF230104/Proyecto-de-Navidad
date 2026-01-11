import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMisPersonajesComponent } from './listadoMisPersonajes.component';

describe('ListadoComponent', () => {
  let component: ListadoMisPersonajesComponent;
  let fixture: ComponentFixture<ListadoMisPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoMisPersonajesComponent]
    });
    fixture = TestBed.createComponent(ListadoMisPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
