import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoDialogComponent } from './ceo-dialog.component';

describe('CeoDialogComponent', () => {
  let component: CeoDialogComponent;
  let fixture: ComponentFixture<CeoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
