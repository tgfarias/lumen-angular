import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaSearchComponent } from './sistema-search.component';

describe('SistemaSearchComponent', () => {
  let component: SistemaSearchComponent;
  let fixture: ComponentFixture<SistemaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
