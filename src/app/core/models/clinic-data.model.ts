export interface ClinicData {
  patientCount: number;
  dateRangeText: string;
  lastUpdatedAt: string;
  // Time in Range percentages (should sum to 100)
  veryLowRange: number; // 40-54 mg/dl
  lowRange: number;     // 54-70 mg/dl
  targetRange: number;  // 70-180 mg/dl
  highRange: number;    // 180-240 mg/dl
  veryHighRange: number; // 240-400 mg/dl
  // GMI percentages (should sum to 100)
  gmiLow: number;       // <7%
  gmiNormal: number;    // 7-8%
  gmiHigh: number;      // >8%
  averageGmi: number;
}