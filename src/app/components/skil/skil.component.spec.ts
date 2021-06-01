import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilComponent } from './skil.component';

describe('SkilComponent', () => {
  let component: SkilComponent;
  let fixture: ComponentFixture<SkilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
