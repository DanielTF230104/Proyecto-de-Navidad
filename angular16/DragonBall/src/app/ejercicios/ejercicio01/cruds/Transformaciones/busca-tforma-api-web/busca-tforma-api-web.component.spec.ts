import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaTFormaApiWebComponent } from './busca-tforma-api-web.component';

describe('BuscaTFormaApiWebComponent', () => {
  let component: BuscaTFormaApiWebComponent;
  let fixture: ComponentFixture<BuscaTFormaApiWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaTFormaApiWebComponent]
    });
    fixture = TestBed.createComponent(BuscaTFormaApiWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
