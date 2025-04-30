import { ChartConfiguration } from 'chart.js';
import { ClinicData } from '../../models/clinic-data.model';

export interface ClinicOutcomesState {
  selectedPeriod: number;
  clinicData: ClinicData | null;
  timeInRangeChartData: ChartConfiguration<'bar'>['data'] | null;
  gmiChartData: ChartConfiguration<'pie'>['data'] | null;
  averageGmi: number;
}

export const initialClinicOutcomesState: ClinicOutcomesState = {
  selectedPeriod: 30,
  clinicData: null,
  timeInRangeChartData: null,
  gmiChartData: null,
  averageGmi: 0
};