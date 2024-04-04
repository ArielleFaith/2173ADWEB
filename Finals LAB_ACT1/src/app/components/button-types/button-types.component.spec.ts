import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTypesComponent } from './button-types.component';

describe('ButtonTypesComponent', () => {
  let component: ButtonTypesComponent;
  let fixture: ComponentFixture<ButtonTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTypesComponent]
    });
    fixture = TestBed.createComponent(ButtonTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
