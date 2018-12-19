import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoDataComponent } from './sto-data.component';

describe('StoDataComponent', () => {
  let component: StoDataComponent;
  let fixture: ComponentFixture<StoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
