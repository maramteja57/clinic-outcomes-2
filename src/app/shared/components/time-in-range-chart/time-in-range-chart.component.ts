import { Component } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-time-in-range-chart',
  templateUrl: './time-in-range-chart.component.html',
  styleUrls: ['./time-in-range-chart.component.css']
})
export class TimeInRangeChartComponent extends BaseChartComponent<'bar'> {
  protected chartType: 'bar' = 'bar';
}
