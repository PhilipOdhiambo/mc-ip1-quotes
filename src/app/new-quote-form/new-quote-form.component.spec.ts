import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteFormComponent } from './new-quote-form.component';

describe('NewQuoteFormComponent', () => {
  let component: NewQuoteFormComponent;
  let fixture: ComponentFixture<NewQuoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQuoteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
