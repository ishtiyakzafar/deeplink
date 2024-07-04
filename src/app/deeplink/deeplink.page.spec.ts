import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeeplinkPage } from './deeplink.page';

describe('DeeplinkPage', () => {
  let component: DeeplinkPage;
  let fixture: ComponentFixture<DeeplinkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeplinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
