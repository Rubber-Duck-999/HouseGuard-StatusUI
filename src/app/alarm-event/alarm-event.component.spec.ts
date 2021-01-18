import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmEventComponent } from './alarm-event.component';

describe('AlarmEventComponent', () => {
  let component: AlarmEventComponent;
  let fixture: ComponentFixture<AlarmEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
