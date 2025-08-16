import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternManagementComponent } from './intern-management.component';

describe('InternManagementComponent', () => {
  let component: InternManagementComponent;
  let fixture: ComponentFixture<InternManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
