import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeComponent } from './post-type.component';

describe('PostTypeComponent', () => {
  let component: PostTypeComponent;
  let fixture: ComponentFixture<PostTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
