import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoDataComponent } from './sto-data/sto-data.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartVolumeComponent } from './chart-volume/chart-volume.component';
import { OhlcComponent } from './ohlc/ohlc.component';


@NgModule({
  declarations: [
    AppComponent,
    StoDataComponent,
    ChartComponent,
    ChartVolumeComponent,
    OhlcComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
