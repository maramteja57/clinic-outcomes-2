import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from './services/clinic-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ClinicDataService
  ]
})
export class CoreModule {
  // Prevent reimporting the CoreModule
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it only in AppModule.');
    }
  }
}