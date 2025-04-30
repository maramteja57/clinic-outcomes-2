import { Component } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-gmi-chart',
  templateUrl: './gmi-chart.component.html',
  styleUrls: ['./gmi-chart.component.css']
})
export class GmiChartComponent extends BaseChartComponent<'pie'> {
  protected chartType: 'pie' = 'pie';
}
