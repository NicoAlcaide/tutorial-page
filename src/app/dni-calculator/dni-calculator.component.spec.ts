import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DniCalculatorComponent } from './dni-calculator.component';

describe('DniCalculatorComponent', () => {
  let component: DniCalculatorComponent;
  let fixture: ComponentFixture<DniCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DniCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DniCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
