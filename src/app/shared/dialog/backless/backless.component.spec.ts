import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklessComponent } from './backless.component';

describe('BacklessComponent', () => {
  let component: BacklessComponent;
  let fixture: ComponentFixture<BacklessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
