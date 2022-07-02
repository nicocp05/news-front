import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedNewsScreenComponent } from './archived-news-screen.component';

describe('ArchivedNewsScreenComponent', () => {
  let component: ArchivedNewsScreenComponent;
  let fixture: ComponentFixture<ArchivedNewsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedNewsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedNewsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
