import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfObjectivesComponent } from './list-of-objectives.component';

describe('ListOfObjectivesComponent', () => {
  let component: ListOfObjectivesComponent;
  let fixture: ComponentFixture<ListOfObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfObjectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
