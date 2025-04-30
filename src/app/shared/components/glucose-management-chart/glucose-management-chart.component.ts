import { Component } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-glucose-management-chart',
  templateUrl: './glucose-management-chart.component.html',
  styleUrls: ['./glucose-management-chart.component.css']
})
export class GlucoseManagementChartComponent extends BaseChartComponent<'pie'> {
  protected chartType: 'pie' = 'pie';
}
