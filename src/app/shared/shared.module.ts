import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlucoseRangeChartComponent } from './components/glucose-range-chart/glucose-range-chart.component';
import { GlucoseManagementChartComponent } from './components/glucose-management-chart/glucose-management-chart.component';
import { NgChartsModule } from 'ng2-charts';

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    GlucoseRangeChartComponent,
    GlucoseManagementChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    // Components
    GlucoseRangeChartComponent,
    GlucoseManagementChartComponent,
    
    // Modules
    NgChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class SharedModule { }