import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidetabComponent } from './sidetab.component';

describe('SidetabComponent', () => {
  let component: SidetabComponent;
  let fixture: ComponentFixture<SidetabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidetabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
