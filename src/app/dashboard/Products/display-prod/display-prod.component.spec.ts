import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProdComponent } from './display-prod.component';

describe('DisplayProdComponent', () => {
  let component: DisplayProdComponent;
  let fixture: ComponentFixture<DisplayProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
