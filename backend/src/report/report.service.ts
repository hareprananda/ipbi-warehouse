import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpReturn } from 'src/helper';
import { PrismaService } from 'src/prisma/prisma.service';
import pdf from 'html-pdf';
import path from 'path';
import fs from 'fs';
import { GoodsReportQuery } from './dto';
import dayjs from 'dayjs';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  async generateReport(dateMonth: string) {
    const [year, month] = dateMonth.split('-');

    const firstDayMonth = `${year}-${month}-01`;
    const currentFirstDayMonth = dayjs().format('YYYY-MM-01');
    if (new Date(firstDayMonth).getTime() >= new Date(currentFirstDayMonth).getTime())
      return HttpReturn('Month must be before current month', HttpStatus.BAD_REQUEST);
    else if (new Date('2022-12-31').getTime() > new Date(firstDayMonth).getTime())
      return HttpReturn('Bad Request', HttpStatus.BAD_REQUEST);

    const fileName = `WarehouseM${month}Y${year}.pdf`;
    if (fs.existsSync(path.resolve(`public/${fileName}`)))
      return HttpReturn({ url: `${process.env.BACKEND_API}/${fileName}` }, HttpStatus.OK);
    try {
      const reportData: GoodsReportQuery[] = await this.prisma.$queryRaw`
        select 
        g."name", 
        g.unit, 
        concat('G-', g.id) id,
        date_trunc('month', min(gh."updatedAt"))::date <= ${firstDayMonth}::date "isExist", 
        (sum(gh.quantity) * (-1) + g.stock)::integer as "start",
        sum(gh.quantity) * (-1) + g.stock + (case when sum(monthly.quantity) isnull then 0 else sum(monthly.quantity) end) as "end",
        (case when sum(monthly.quantity) isnull then 0 else sum(monthly.quantity) end) as "change"
        from "Goods" g
        join "GoodsHistory" gh ON g.id = gh."idGoods"
        left join "Request" r on gh."idRequest" = r.id
        left join (
            select gh2.id, gh2.quantity, gh2."updatedAt"  from "GoodsHistory" gh2 
            join "Goods" g2 on g2.id = gh2."idGoods"
            left join "Request" r2 on r2."id" = gh2."idRequest"
            where extract(month from gh2."updatedAt") = ${parseInt(month)}
            and extract(year from gh2."updatedAt") = ${parseInt(year)}
            and r2.status in ('FINISH', 'ONGOING', null)
            ) monthly on monthly.id = gh.id
        where gh."updatedAt"::DATE  >= ${firstDayMonth}::DATE 
        and r.status in ('FINISH', 'ONGOING', null)
        group by g.id
    `;

      let htmlContent = fs.readFileSync(path.resolve(`html/report.html`), 'utf8');

      const tableContent = reportData.reduce(
        (acc, v) =>
          !v.isExist
            ? acc
            : (acc += `<tr>
          <td>
            <p>Kode</p>
            <p>${v.id}</p>
          </td>
          <td>
            <p>Nama</p>
            <p>${v.name}</p>
          </td>
          <td>
            <p>Satuan</p>
            <p>${v.unit}</p>
          </td>
          <td>
            <p>Awal Periode</p>
            <p>${v.start}</p>
          </td>
          <td>
            <p>Akhir Periode</p>
            <p>${v.end}</p>
          </td>
          <td>
            <p>Perubahan</p>
            <p>${v.change}</p>
          </td>
        </tr>`),
        '',
      );

      htmlContent = htmlContent.replace(/{{\s*baseUrl\s*}}/gi, process.env.BACKEND_API);
      htmlContent = htmlContent.replace(/{{\s*content\s*}}/gi, tableContent);
      htmlContent = htmlContent.replace(/{{\s*periode\s*}}/gi, dayjs(firstDayMonth).locale('id').format('MMMM YYYY'));
      return new Promise((resolve) => {
        pdf
          .create(htmlContent, {
            format: 'A4',
            border: {
              top: '20px',
              right: '40px',
              bottom: '20px',
              left: '40px',
            },
          })
          .toFile(path.resolve(`public/${fileName}`), function (err, fileRes) {
            if (err) resolve(HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR));
            resolve(HttpReturn({ url: `${process.env.BACKEND_API}/${fileName}` }, HttpStatus.OK));
          });
      });
    } catch {
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
