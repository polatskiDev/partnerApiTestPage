import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsaPartnerapiComponent } from './ksa-partnerapi.component';

describe('KsaPartnerapiComponent', () => {
  let component: KsaPartnerapiComponent;
  let fixture: ComponentFixture<KsaPartnerapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KsaPartnerapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KsaPartnerapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
