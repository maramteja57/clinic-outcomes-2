import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClinicOutcomesState } from './clinic-outcomes.state';

export const selectClinicOutcomesState = createFeatureSelector<ClinicOutcomesState>('clinicOutcomes');

export const selectSelectedPeriod = createSelector(
  selectClinicOutcomesState,
  state => state.selectedPeriod
);

export const selectClinicData = createSelector(
  selectClinicOutcomesState,
  state => state.clinicData
);

export const selectTimeInRangeChartData = createSelector(
  selectClinicOutcomesState,
  state => state.timeInRangeChartData
);

export const selectGmiChartData = createSelector(
  selectClinicOutcomesState,
  state => state.gmiChartData
);

export const selectAverageGmi = createSelector(
  selectClinicOutcomesState,
  state => state.averageGmi
);
