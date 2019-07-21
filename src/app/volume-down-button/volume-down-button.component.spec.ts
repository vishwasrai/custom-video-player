import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDownButtonComponent } from './volume-down-button.component';

describe('VolumeDownButtonComponent', () => {
  let component: VolumeDownButtonComponent;
  let fixture: ComponentFixture<VolumeDownButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeDownButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
