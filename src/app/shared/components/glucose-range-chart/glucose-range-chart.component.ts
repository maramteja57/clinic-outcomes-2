import { Component } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-glucose-range-chart',
  templateUrl: './glucose-range-chart.component.html',
  styleUrls: ['./glucose-range-chart.component.css']
})
export class GlucoseRangeChartComponent extends BaseChartComponent<'bar'> {
  protected chartType: 'bar' = 'bar';
}
