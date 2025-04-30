import { createAction, props } from '@ngrx/store';
import { ClinicData } from '../../models/clinic-data.model';
import { ChartConfiguration } from 'chart.js';

export const updateSelectedPeriod = createAction(
  '[Clinic Outcomes] Update Selected Period',
  props<{ period: number }>()
);

export const loadClinicData = createAction(
  '[Clinic Outcomes] Load Clinic Data',
  props<{ period: number }>()
);

export const loadClinicDataSuccess = createAction(
  '[Clinic Outcomes] Load Clinic Data Success',
  props<{
    clinicData: ClinicData,
    timeInRangeChartData: ChartConfiguration<'bar'>['data'],
    gmiChartData: ChartConfiguration<'pie'>['data'],
    averageGmi: number
  }>()
);
