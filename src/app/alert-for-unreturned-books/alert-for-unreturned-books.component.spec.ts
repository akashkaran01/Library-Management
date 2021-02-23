import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertForUnreturnedBooksComponent } from './alert-for-unreturned-books.component';

describe('AlertForUnreturnedBooksComponent', () => {
  let component: AlertForUnreturnedBooksComponent;
  let fixture: ComponentFixture<AlertForUnreturnedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertForUnreturnedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertForUnreturnedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
