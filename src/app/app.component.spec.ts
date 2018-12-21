import { TestBed, async, getTestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoDataComponent } from './sto-data/sto-data.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CssSelector } from '@angular/compiler';
import {By} from '@angular/platform-browser';
import { adjustBlueprintForNewNode } from '@angular/core/src/render3/instructions';
import { ChartVolumeComponent } from './chart-volume/chart-volume.component';
import { OhlcComponent } from './ohlc/ohlc.component';
import { inject } from '@angular/core';
import { StockApiService } from 'src/stock-api.service';
import { HttpParams } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StoDataComponent,
        ChartComponent,
        ChartVolumeComponent,
        OhlcComponent
      ],
      imports: [
        ChartsModule,
        FormsModule,
        HttpClientTestingModule
      ],
    }).compileComponents();
    let injector: TestBed;
    let service: StockApiService;
    let httpMock: HttpTestingController;
    injector = getTestBed();
    service = injector.get(StockApiService);
    httpMock = injector.get(HttpTestingController);
  }));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance as AppComponent;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'api-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('api-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to api-app!');
  });

  it('should call the setSymbol() function', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance as AppComponent;
    app.value = "AAPL";
    
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    expect(app.input).toEqual('AAPL');
    expect(app.value).toEqual('');
    expect(app.errorFlag).toEqual(false);
    expect(app.flag).toEqual(true);
  });
  
});
