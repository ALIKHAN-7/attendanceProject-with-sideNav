import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAndSecurityComponent } from './it-and-security.component';

describe('ItAndSecurityComponent', () => {
  let component: ItAndSecurityComponent;
  let fixture: ComponentFixture<ItAndSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItAndSecurityComponent]
    });
    fixture = TestBed.createComponent(ItAndSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
