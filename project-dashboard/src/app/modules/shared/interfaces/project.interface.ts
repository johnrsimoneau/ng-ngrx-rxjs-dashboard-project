import { Company } from './company.interface';

export interface Project {
  id: string;
  projectCodeName: string;
  overallStatus: string;
  startDate: string;
  modifiedDate: string;
  percentageComplete: string;
  projectedEndDate: string;
  companyId: string;
  companyName?: string;
}
