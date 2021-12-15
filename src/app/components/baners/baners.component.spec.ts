import { ComponentFixture, TestBed } from '@angular/core/testing';

import { banersComponent } from './baners.component';

describe('CalendarioComponent', () => {
  let component: banersComponent;
  let fixture: ComponentFixture<banersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ banersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(banersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
