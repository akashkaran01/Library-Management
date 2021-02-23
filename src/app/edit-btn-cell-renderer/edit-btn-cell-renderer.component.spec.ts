import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBtnCellRendererComponent } from './edit-btn-cell-renderer.component';

describe('EditBtnCellRendererComponent', () => {
  let component: EditBtnCellRendererComponent;
  let fixture: ComponentFixture<EditBtnCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBtnCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBtnCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
