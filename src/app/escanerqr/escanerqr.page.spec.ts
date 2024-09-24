import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanerqrPage } from './escanerqr.page';

describe('EscanerqrPage', () => {
  let component: EscanerqrPage;
  let fixture: ComponentFixture<EscanerqrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanerqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
