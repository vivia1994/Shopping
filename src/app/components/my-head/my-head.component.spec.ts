import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeadComponent } from './my-head.component';

describe('MyHeadComponent', () => {
  let component: MyHeadComponent;
  let fixture: ComponentFixture<MyHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
