import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPersonajeComponent } from './miPersonaje.component';

describe('MiPersonajeComponent', () => {
  let component: MiPersonajeComponent;
  let fixture: ComponentFixture<MiPersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiPersonajeComponent]
    });
    fixture = TestBed.createComponent(MiPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
