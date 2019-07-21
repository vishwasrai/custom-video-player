import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeUpButtonComponent } from './volume-up-button.component';

describe('VolumeUpButtonComponent', () => {
  let component: VolumeUpButtonComponent;
  let fixture: ComponentFixture<VolumeUpButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeUpButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeUpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
