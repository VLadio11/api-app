import { Component, OnInit } from '@angular/core';
import { StockApiService } from 'src/stock-api.service';

@Component({
  selector: 'app-chart-volume',
  templateUrl: './chart-volume.component.html',
  styleUrls: ['./chart-volume.component.css']
})
export class ChartVolumeComponent implements OnInit {

  constructor(private htpp: StockApiService) { }
  latestVolume = 0;

  ngOnInit() {
    this.getVolume();
  }

  barChartOptions = { scaleShowVerticalLines: false, responsive:true};
  barChartLabels = ["Column 1", "Column 2"];
  barChartType = 'line';
  barChartLegend = false;
  barChartData =  [
    {data: [this.latestVolume, '2'] , label: 'VWAP'},
  ];
  setChart(){
    this.barChartData =  [
      {data: [this.latestVolume] , label: 'VWAP'},
    ];
  }

  getVolume(){
    this.htpp.stockData.subscribe(data=>{
      let latestVolume = data.latestVolume.toLocaleString();
      this.latestVolume = parseInt(latestVolume);
      console.log(this.latestVolume);
      this.setChart();
    });
  }
}
