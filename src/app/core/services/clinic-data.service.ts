import { Injectable } from '@angular/core';
import { ClinicData } from '../models/clinic-data.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicDataService {
  constructor() { }

  /**
   * Retrieves mock clinic data for the specified time period
   * @param days Number of days to retrieve data for (30, 60, or 90)
   * @returns Clinic data object with patient statistics
   */
  getDataForPeriod(days: number): ClinicData {
    const currentDate = new Date().toLocaleString();
    
    // Return mock data based on the selected time period
    if (days === 30) {
      return {
        patientCount: 150,
        dateRangeText: '01/01/2024 - 01/30/2024',
        lastUpdatedAt: currentDate,
        veryLowRange: 10,
        lowRange: 15,
        targetRange: 50,
        highRange: 15,
        veryHighRange: 10,
        gmiLow: 20,
        gmiNormal: 65,
        gmiHigh: 15,
        averageGmi: 7.1
      };
    } else if (days === 60) {
      return {
        patientCount: 200,
        dateRangeText: '12/02/2023 - 01/30/2024',
        lastUpdatedAt: currentDate,
        veryLowRange: 12,
        lowRange: 13,
        targetRange: 52,
        highRange: 15,
        veryHighRange: 8,
        gmiLow: 18,
        gmiNormal: 70,
        gmiHigh: 12,
        averageGmi: 7.3
      };
    } else {
      // 90 days
      return {
        patientCount: 250,
        dateRangeText: '11/01/2023 - 01/30/2024',
        lastUpdatedAt: currentDate,
        veryLowRange: 8,
        lowRange: 17,
        targetRange: 55,
        highRange: 10,
        veryHighRange: 10,
        gmiLow: 22,
        gmiNormal: 66,
        gmiHigh: 12,
        averageGmi: 7.4
      };
    }
  }
}