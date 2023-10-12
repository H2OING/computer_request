import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentRequestFormComponent } from './equipment-request-form.component';

describe('EquipmentRequestFormComponent', () => {
  let component: EquipmentRequestFormComponent;
  let fixture: ComponentFixture<EquipmentRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentRequestFormComponent]
    });
    fixture = TestBed.createComponent(EquipmentRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
