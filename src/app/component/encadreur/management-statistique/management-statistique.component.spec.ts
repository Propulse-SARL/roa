import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementStatistiqueComponent } from './management-statistique.component';

describe('ManagementStatistiqueComponent', () => {
  let component: ManagementStatistiqueComponent;
  let fixture: ComponentFixture<ManagementStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementStatistiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
