import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReviewsPage } from './movie-reviews.page';

describe('MovieReviewsPage', () => {
  let component: MovieReviewsPage;
  let fixture: ComponentFixture<MovieReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieReviewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
