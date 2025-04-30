import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, OnDestroy, Directive } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js/auto';

@Directive()
export abstract class BaseChartComponent<T extends ChartType> implements OnChanges, OnDestroy {
  @Input() chartData: ChartConfiguration<T>['data'];
  @Input() chartOptions: ChartConfiguration<T>['options'];
  @ViewChild('chartCanvas') chartCanvas: ElementRef<HTMLCanvasElement>;

  protected chart: Chart<T>;
  protected abstract chartType: T;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && this.chartCanvas) {
      if (this.chart) {
        this.chart.data = this.chartData;
        this.chart.options = this.chartOptions;
        this.chart.update();
      } else {
        this.createChart();
      }
    }
  }

  protected createChart(): void {
    if (this.chartCanvas) {
      this.chart = new Chart(this.chartCanvas.nativeElement, {
        type: this.chartType,
        data: this.chartData,
        options: this.chartOptions,
      });
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}