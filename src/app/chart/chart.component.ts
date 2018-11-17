import { Component, OnInit } from '@angular/core';
import { StockApiService } from 'src/stock-api.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  constructor(private stockService: StockApiService) { }
  open = [];
  low = [];
  high = [];
  label = [];
  close = [];
  vwap = [];
  barChartOptions = { scaleShowVerticalLines: false, responsive:true};
  barChartLabels = this.label;
  barChartType = 'line';
  barChartLegend = false;
  barChartData =  [
    {data: this.vwap, label: 'VWAP'},
    
  ];
  chartColors = [
    {borderColor: 'blue',
    backgroundColor: 'lightblue'
  }]
  
  ngOnInit() {
    this.getChartData();
    
  }
  renderChart(){
    this.barChartLabels = this.label;
    this.barChartType = 'line';
    this.barChartLegend = true;
    this.barChartData =  [
      {data: this.vwap, label: 'VWAP'}
    ];
  }
  clearArrays(){
    this.label.splice(0, this.label.length);
    this.vwap.splice(0, this.vwap.length);
  }

  getChartData(){
    this.stockService.stockChart.subscribe(
      data=>{
        console.log(data);
        this.clearArrays();
        for (let i of data){     
          this.open.push(i.open),
          this.low.push(i.close),
          this.high.push(i.high),
          this.label.push(i.label),
          this.close.push(i.close);
          this.vwap.push(i.vwap);
          
        };
        console.log(this.vwap)
        this.renderChart();
      }
    )
  }
}
