import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { registerContentQuery } from '@angular/core/src/render3/instructions';
import {StockApiService} from '../stock-api.service';
import {GridOptions} from 'ag-grid-community';
import {ChartComponent} from './chart/chart.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value ='';
  input ='';
  flag =false;
  private gridOptions: GridOptions;
  constructor(private http: HttpClient, private stockDats: StockApiService){}
  errorFlag=false;

  setSymbol(){
    this.value = this.value.toUpperCase();
    this.input = this.value;
    this.value = '';
    this.errorFlag=false;
    this.flag=true;
    this.stockDats.loadData(this.input);
  };
  ngOnInit(){}
  title = 'api-app';
}
