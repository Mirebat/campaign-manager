import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotBlackSludgeComponent } from './rot-black-sludge.component';

describe('RotBlackSludgeComponent', () => {
  let component: RotBlackSludgeComponent;
  let fixture: ComponentFixture<RotBlackSludgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotBlackSludgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotBlackSludgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
