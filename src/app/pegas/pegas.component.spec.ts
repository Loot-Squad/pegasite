import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegasComponent } from './pegas.component';

describe('PegasComponent', () => {
  let component: PegasComponent;
  let fixture: ComponentFixture<PegasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
