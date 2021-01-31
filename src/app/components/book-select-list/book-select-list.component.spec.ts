import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelectListComponent } from './book-select-list.component';

describe('BookSelectListComponent', () => {
  let component: BookSelectListComponent;
  let fixture: ComponentFixture<BookSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSelectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
