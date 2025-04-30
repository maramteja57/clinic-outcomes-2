import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js/auto';
import { Store, select } from '@ngrx/store';
import { ClinicDataService } from '../../core/services/clinic-data.service';
import * as ClinicOutcomesActions from '../../core/store/clinic-outcomes/clinic-outcomes.actions';
import * as ClinicOutcomesSelectors from '../../core/store/clinic-outcomes/clinic-outcomes.selectors';
import { ClinicOutcomesState } from '../../core/store/clinic-outcomes/clinic-outcomes.state';

// Register the datalabels plugin globally
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // UI display values
  selectedPeriod = 30;
  patientCount = 0;
  dateRangeText = '';
  lastUpdatedAt = '';
  averageGmi = 0;

  // Chart data
  timeInRangeChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Time in Range'],
    datasets: []
  };

  timeInRangeChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {
        stacked: true,
        display: false
      },
      y: {
        stacked: true,
        display: false
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        position: 'nearest',
        callbacks: {
          label: (ctx) => {
            const value = ctx.parsed.y !== undefined ? ctx.parsed.y : ctx.parsed.x;
            return `${ctx.dataset.label}: ${value}%`;
          }
        }
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        color: '#fff',
        font: { weight: 'bold' },
        formatter: (value: number) => `${value}%`
      }
    }
  };

  gmiChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Below Range', 'In Range', 'Above Range'],
    datasets: []
  };

  gmiChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: { display: false, position: 'bottom' },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const label = ctx.label || '';
            const value = ctx.parsed || 0;
            return `${label}: ${value}%`;
          }
        }
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        color: '#fff',
        font: { weight: 'bold' },
        formatter: (value: number) => `${value}%`
      }
    }
  };

  constructor(
    private clinicDataService: ClinicDataService,
    private store: Store<{ clinicOutcomes: ClinicOutcomesState }>
  ) {
    // Subscribe to store selectors
    this.store.pipe(select(ClinicOutcomesSelectors.selectSelectedPeriod))
      .subscribe(period => {
        this.selectedPeriod = period;
      });

    this.store.pipe(select(ClinicOutcomesSelectors.selectClinicData))
      .subscribe(data => {
        if (data) {
          this.patientCount = data.patientCount;
          this.dateRangeText = data.dateRangeText;
          this.lastUpdatedAt = data.lastUpdatedAt;
        }
      });

    this.store.pipe(select(ClinicOutcomesSelectors.selectTimeInRangeChartData))
      .subscribe(chartData => {
        if (chartData) {
          this.timeInRangeChartData = chartData;
        }
      });

    this.store.pipe(select(ClinicOutcomesSelectors.selectGmiChartData))
      .subscribe(chartData => {
        if (chartData) {
          this.gmiChartData = chartData;
        }
      });

    this.store.pipe(select(ClinicOutcomesSelectors.selectAverageGmi))
      .subscribe(gmi => {
        this.averageGmi = gmi;
      });
  }

  ngOnInit(): void {
    // Load default 30-day data on component initialization
    this.loadData(this.selectedPeriod);
  }

  ngAfterViewInit(): void {
    // Ensure the charts are fully initialized after the view is loaded
    this.loadData(this.selectedPeriod);
  }

  /**
   * Loads clinic data for the specified time period and updates the store
   * @param period Number of days to load data for
   */
  loadData(period: number): void {
    // Update the selected period in the store
    this.store.dispatch(ClinicOutcomesActions.updateSelectedPeriod({ period }));
    
    // Fetch data from service
    const clinicData = this.clinicDataService.getDataForPeriod(period);
    
    // Prepare time in range chart data
    const timeInRangeChartData: ChartConfiguration<'bar'>['data'] = {
      labels: ['Time in Range'],
      datasets: [
        {
          label: '40-54',
          data: [clinicData.veryLowRange],
          backgroundColor: '#F44336',
          stack: '1',
        },
        {
          label: '54-70',
          data: [clinicData.lowRange],
          backgroundColor: '#FF9800',
          stack: '1',
        },
        {
          label: '70-180',
          data: [clinicData.targetRange],
          backgroundColor: '#4CAF50',
          stack: '1',
        },
        {
          label: '180-240',
          data: [clinicData.highRange],
          backgroundColor: '#2196F3',
          stack: '1',
        },
        {
          label: '240-400',
          data: [clinicData.veryHighRange],
          backgroundColor: '#9C27B0',
          stack: '1',
        },
      ]
    };

    // Prepare GMI chart data
    const gmiChartData: ChartConfiguration<'pie'>['data'] = {
      labels: ['Below Range', 'In Range', 'Above Range'],
      datasets: [
        {
          data: [clinicData.gmiLow, clinicData.gmiNormal, clinicData.gmiHigh],
          backgroundColor: ['#F4694D', '#5DBB5B', '#F8B76C']
        }
      ]
    };

    // Update store with new data
    this.store.dispatch(ClinicOutcomesActions.loadClinicDataSuccess({
      clinicData,
      timeInRangeChartData,
      gmiChartData,
      averageGmi: clinicData.averageGmi
    }));
  }

  /**
   * Triggers browser print functionality
   */
  printPage(): void {
    window.print();
  }
}