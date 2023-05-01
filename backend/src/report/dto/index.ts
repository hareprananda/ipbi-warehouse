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
  isExist: boolean;
  change: number;
};
