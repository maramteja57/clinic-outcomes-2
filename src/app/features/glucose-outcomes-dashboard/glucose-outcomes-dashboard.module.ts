import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlucoseOutcomesDashboardComponent } from './glucose-outcomes-dashboard.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    GlucoseOutcomesDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GlucoseOutcomesDashboardComponent
  ]
})
export class GlucoseOutcomesDashboardModule { }