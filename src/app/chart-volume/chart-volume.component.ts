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
  avgTotalVolume = 0;

  ngOnInit() {
    this.getVolume();
  }

  barChartOptions = { scaleShowVerticalLines: false, responsive:true};
  barChartLabels = ["Late Volume", "Avg Volume"];
  barChartType = 'bar';
  barChartLegend = false;
  barChartData =  [
    {data: [this.latestVolume, this.avgTotalVolume] , label: ['Volume']},
  ];
  setChart(){
    this.barChartData =  [
      {data: [this.latestVolume, this.avgTotalVolume] , label: ['Volume']},
    ];
  }

  getVolume(){
    this.htpp.stockData.subscribe(data=>{
      this.latestVolume = data.latestVolume;
      this.avgTotalVolume = data.avgTotalVolume;
      this.setChart();
    });
  }
}
