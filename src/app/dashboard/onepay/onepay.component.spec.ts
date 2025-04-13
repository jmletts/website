import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepayComponent } from './onepay.component';

describe('OnepayComponent', () => {
  let component: OnepayComponent;
  let fixture: ComponentFixture<OnepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnepayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
