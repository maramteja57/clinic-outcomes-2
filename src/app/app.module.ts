import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { GlucoseOutcomesDashboardModule } from './features/glucose-outcomes-dashboard/glucose-outcomes-dashboard.module';
import { environment } from '../environments/environment';

import { clinicOutcomesReducer } from './core/store/clinic-outcomes/clinic-outcomes.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    
    // Core & Feature modules
    CoreModule,
    SharedModule,
    GlucoseOutcomesDashboardModule,
    
    // NgRx store
    StoreModule.forRoot({ 
      clinicOutcomes: clinicOutcomesReducer 
    }),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: environment.production 
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }