import { Component, OnInit } from '@angular/core';
import { StockApiService } from 'src/stock-api.service';


@Component({
  selector: 'app-ohlc',
  templateUrl: './ohlc.component.html',
  styleUrls: ['./ohlc.component.css']
})
export class OhlcComponent implements OnInit {

  constructor(private http: StockApiService) { }
  high = 0;
  low = 0;
  open = 0;
  close = 0;
  
  barChartOptions = { scaleShowVerticalLines: false, responsive:true};
  barChartLabels = ['Open', 'High', 'Low', 'Close'];
  barChartType = 'line';
  barChartLegend = false;
  barChartData =  [
    {data: [this.open, this.high, this.low, this.close] , label: 'Key Prices'},
  ];

  renderChart(){
    this.barChartData =  [
      {data: [this.open, this.high, this.low, this.close] , label: 'Key Prices'}
    ];
  }

  ngOnInit() {
    this.getOhlc();
  }

  getOhlc(){
    this.http.stockData.subscribe(data=>{
      this.high = data.high;
      this.low = data.low;
      this.open = data.open;
      this.close = data.close;
      this.renderChart();
    });
  }
}
