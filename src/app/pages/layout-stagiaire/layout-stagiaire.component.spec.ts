import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutStagiaireComponent } from './layout-stagiaire.component';

describe('LayoutStagiaireComponent', () => {
  let component: LayoutStagiaireComponent;
  let fixture: ComponentFixture<LayoutStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutStagiaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
