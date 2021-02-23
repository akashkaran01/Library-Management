import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DltBtnCellRendererComponent } from './dlt-btn-cell-renderer.component';

describe('DltBtnCellRendererComponent', () => {
  let component: DltBtnCellRendererComponent;
  let fixture: ComponentFixture<DltBtnCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DltBtnCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DltBtnCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
