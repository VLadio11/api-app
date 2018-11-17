import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoDataComponent } from './sto-data/sto-data.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CssSelector } from '@angular/compiler';
import {By} from '@angular/platform-browser';
import { adjustBlueprintForNewNode } from '@angular/core/src/render3/instructions';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StoDataComponent,
        ChartComponent
      ],
      imports: [
        ChartsModule,
        FormsModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
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
    app.value = "aapl";
    
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    expect(app.value).toEqual('AAPL');
    expect(app.input).toEqual(app.value);
    expect(app.flag).toEqual(true);
    expect(app.errorFlag).toEqual(false);
  });

  it('should call the hero service', ()=>{
    
  });
  
});
