import { Controller, Get, Query, Res } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportParams } from './dto';
import { Response } from 'express';
import { Admin } from 'src/auth/auth.guard';
import { HttpReturn } from 'src/helper';

@Controller('report')
@Admin()
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get('/generate')
  async generate(@Query() query: ReportParams, @Res() response: Response) {
    const { month } = query;
    const data = (await this.reportService.generateReport(month)) as ReturnType<typeof HttpReturn>;
    response.status(data.statusCode).json(data);
  }
}
