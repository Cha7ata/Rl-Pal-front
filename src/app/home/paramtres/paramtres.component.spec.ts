import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamtresComponent } from './paramtres.component';

describe('ParamtresComponent', () => {
  let component: ParamtresComponent;
  let fixture: ComponentFixture<ParamtresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamtresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamtresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
