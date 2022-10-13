import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployloginComponent } from './employlogin.component';

describe('EmployloginComponent', () => {
  let component: EmployloginComponent;
  let fixture: ComponentFixture<EmployloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
