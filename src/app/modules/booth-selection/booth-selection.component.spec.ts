import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothSelectionComponent } from './booth-selection.component';

describe('BoothSelectionComponent', () => {
  let component: BoothSelectionComponent;
  let fixture: ComponentFixture<BoothSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoothSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoothSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
