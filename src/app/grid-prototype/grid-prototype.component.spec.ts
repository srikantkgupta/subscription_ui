import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPrototypeComponent } from './grid-prototype.component';

describe('GridPrototypeComponent', () => {
  let component: GridPrototypeComponent;
  let fixture: ComponentFixture<GridPrototypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPrototypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
