import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PouplerComponent } from './poupler.component';

describe('PouplerComponent', () => {
  let component: PouplerComponent;
  let fixture: ComponentFixture<PouplerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PouplerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PouplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
