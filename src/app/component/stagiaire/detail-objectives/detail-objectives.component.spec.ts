import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailObjectivesComponent } from './detail-objectives.component';

describe('DetailObjectivesComponent', () => {
  let component: DetailObjectivesComponent;
  let fixture: ComponentFixture<DetailObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailObjectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
