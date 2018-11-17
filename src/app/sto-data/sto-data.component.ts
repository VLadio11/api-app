import { Component, OnInit, OnDestroy } from '@angular/core';
import { StockApiService } from 'src/stock-api.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-sto-data',
  templateUrl: './sto-data.component.html',
  styleUrls: ['./sto-data.component.css']
})
export class StoDataComponent implements OnInit, OnDestroy {

  name = "";
  averageVol = 0;
  symbol="";
  error = "";
  open = 0;
  low = 0;
  high= 0;
  close= 0;
  dayVolume= 0;
  news1 = "";
  news2 = "";
  realtimePrice = 0;
  stockData = [];
 

  ngOnInit() {
    this.getData();
    this.getNews();
  }
  constructor(private stockDats: StockApiService){}

  getData():void{
    this.stockData = [];
    this.stockDats.stockData.subscribe(
     data =>{
         this.name=data.companyName;
         this.averageVol=data.avgTotalVolume;
         this.open = data.open;
         this.low = data.low;
         this.high = data.high;
         this.close = data.close;
         this.dayVolume = data.latestVolume;
         this.symbol = data.symbol;
         this.realtimePrice = data.iexRealtimePrice;
         console.log(data);
     },
     error => {this.error = "Incorrect.. Enter a correct value"
     }
 
    )
  }
  stockNewsSubscription: Subscription = null;
  getNews(){
    this.stockNewsSubscription = this.stockDats.stockNews.subscribe(
     data => {
       this.stockData = [];
       for(let i of data){
       this.stockData.push(i.headline);
       };
       console.log(data);
    },
   error => {this.error = "Incorrect.. Enter a correct value" }
   )
  };
  ngOnDestroy(){
    this.stockNewsSubscription.unsubscribe();
  }
}
