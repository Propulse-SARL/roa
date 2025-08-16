import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsReportsComponent } from './recents-reports.component';

describe('RecentsReportsComponent', () => {
  let component: RecentsReportsComponent;
  let fixture: ComponentFixture<RecentsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentsReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
