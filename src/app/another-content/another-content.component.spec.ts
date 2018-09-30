import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherContentComponent } from './another-content.component';

describe('AnotherContentComponent', () => {
  let component: AnotherContentComponent;
  let fixture: ComponentFixture<AnotherContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
