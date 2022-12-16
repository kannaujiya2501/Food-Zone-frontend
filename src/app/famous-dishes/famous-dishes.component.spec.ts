import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousDishesComponent } from './famous-dishes.component';

describe('FamousDishesComponent', () => {
  let component: FamousDishesComponent;
  let fixture: ComponentFixture<FamousDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
