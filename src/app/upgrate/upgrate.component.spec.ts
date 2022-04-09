import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgrateComponent } from './upgrate.component';

describe('UpgrateComponent', () => {
  let component: UpgrateComponent;
  let fixture: ComponentFixture<UpgrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
