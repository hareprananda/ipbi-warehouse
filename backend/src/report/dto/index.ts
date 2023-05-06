import { IsDateString } from 'class-validator';

export class ReportParams {
  @IsDateString()
  month: string;
}

export type GoodsReportQuery = {
  name: string;
  unit: string;
  id: string;
  start: number;
  end: number;
  change: number;
};

export interface SingleReport {
  id: string;
  name: string;
  unit: string;
  change: number;
}
