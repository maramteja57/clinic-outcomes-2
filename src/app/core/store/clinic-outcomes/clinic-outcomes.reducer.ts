import { createReducer, on } from '@ngrx/store';
import * as ClinicOutcomesActions from './clinic-outcomes.actions';
import { initialClinicOutcomesState } from './clinic-outcomes.state';

export const clinicOutcomesReducer = createReducer(
  initialClinicOutcomesState,
  on(ClinicOutcomesActions.updateSelectedPeriod, (state, { period }) => ({
    ...state,
    selectedPeriod: period
  })),
  on(ClinicOutcomesActions.loadClinicDataSuccess, (state, { clinicData, timeInRangeChartData, gmiChartData, averageGmi }) => ({
    ...state,
    clinicData,
    timeInRangeChartData,
    gmiChartData,
    averageGmi
  }))
);
