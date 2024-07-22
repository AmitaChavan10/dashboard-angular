import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { BarChartComponent } from './widgets/bar-chart/bar-chart.component';
import { PieChartComponent } from './widgets/pie-chart/pie-chart.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AreaComponent,
    CardComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MatDividerModule,
    AreaComponent,
    CardComponent,
    BarChartComponent,
    PieChartComponent
  ]
})
export class SharedModule { }
