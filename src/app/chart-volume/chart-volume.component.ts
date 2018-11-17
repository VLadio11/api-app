import { Component, OnInit } from '@angular/core';
import { StockApiService } from 'src/stock-api.service';
import { timingSafeEqual } from 'crypto';

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
    {data: ['1', '2'] , label: 'VWAP'},
  ];

  getVolume(){
    this.htpp.stockData.subscribe(data=>{
      data.latestVolume;
    });
  }
}
