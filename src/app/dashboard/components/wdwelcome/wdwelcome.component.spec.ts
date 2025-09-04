import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdwelcomeComponent } from './wdwelcome.component';

describe('WdwelcomeComponent', () => {
  let component: WdwelcomeComponent;
  let fixture: ComponentFixture<WdwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WdwelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
