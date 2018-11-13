import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { registerContentQuery } from '@angular/core/src/render3/instructions';
import {StockApiService} from '../stock-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value ='';
  input ='';
  flag =false;
  constructor(private http: HttpClient, private stockDats: StockApiService){}
 
  errorFlag=false;
  setSymbol(){
    this.value.toUpperCase();
    this.input = this.value;
    this.errorFlag=false;
    this.flag=true;
    this.stockDats.loadData(this.input);
  };
  ngOnInit(){}



  title = 'api-app';
}
