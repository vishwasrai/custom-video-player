import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlikeButtonComponent } from './unlike-button.component';

describe('UnlikeButtonComponent', () => {
  let component: UnlikeButtonComponent;
  let fixture: ComponentFixture<UnlikeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlikeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
