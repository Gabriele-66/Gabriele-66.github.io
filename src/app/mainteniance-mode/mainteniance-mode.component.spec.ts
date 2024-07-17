import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenianceModeComponent } from './mainteniance-mode.component';

describe('MaintenianceModeComponent', () => {
  let component: MaintenianceModeComponent;
  let fixture: ComponentFixture<MaintenianceModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenianceModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenianceModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
