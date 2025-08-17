import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutencadreurComponent } from './layout-encadreur.component';

describe('LayoutencadreurComponent', () => {
  let component: LayoutencadreurComponent;
  let fixture: ComponentFixture<LayoutencadreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutencadreurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutencadreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
