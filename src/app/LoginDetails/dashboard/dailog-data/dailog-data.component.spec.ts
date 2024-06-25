import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogDataComponent } from './dailog-data.component';

describe('DailogDataComponent', () => {
  let component: DailogDataComponent;
  let fixture: ComponentFixture<DailogDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailogDataComponent]
    });
    fixture = TestBed.createComponent(DailogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
