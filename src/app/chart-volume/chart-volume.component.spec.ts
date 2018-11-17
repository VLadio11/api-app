import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVolumeComponent } from './chart-volume.component';

describe('ChartVolumeComponent', () => {
  let component: ChartVolumeComponent;
  let fixture: ComponentFixture<ChartVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
