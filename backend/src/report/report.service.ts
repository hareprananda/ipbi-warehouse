import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpReturn } from 'src/helper';
import { PrismaService } from 'src/prisma/prisma.service';
import pdf from 'html-pdf';
import path from 'path';
import fs from 'fs';
import { GoodsReportQuery, SingleReport } from './dto';
import dayjs from 'dayjs';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  generateSingleTypeReportHTML = (data: SingleReport[], title: string) => {
    let listContent = data.reduce((acc, v) => {
      acc += `
          <tr>
            <td style="width:100px">
              <p>Kode</p>
              <p>${v.id}</p>
            </td>
            <td style="width: 240px">
              <p>Nama</p>
              <p>${v.name}</p>
            </td>
            <td>
              <p>Satuan</p>
              <p>${v.unit}</p>
            </td>
            <td>
              <p>Perubahan</p>
              <p>${v.change < 0 ? '-' : v.change > 0 ? '+' : ''}${Math.abs(v.change)}</p>
            </td>
          </tr>
        `;
      return acc;
    }, '');

    if (data.length === 0) {
      listContent = `
      <tr>
        <td colspan="4" style="border-bottom: none">
          <p>Tidak ada ${title.toLowerCase()} pada periode ini</p>
        </td>
      </tr>
      
      `;
    }

    let paddingTop = '12px';
    if (title === 'Peminjaman') paddingTop = '0px';

    return (
      `<tr>
    <td colspan="4" style="border-bottom: none">
      <h4 style="font-size: 14px;font-family: 'Arial'; padding:${paddingTop} 0px 12px">${title}</h4>
    </td>
  </tr>` + listContent
    );
  };

  generateTableWrapper = (tableContent: string) => {
    return `
    <table style="width: 100%; border-collapse: collapse;border: none;" >
      <tbody>
        ${tableContent}
      </tbody>
    </table>
    `;
  };

  generateRecapHTML = (data: GoodsReportQuery[]) => {
    const tableContent = data.reduce(
      (acc, v) =>
        (acc += `<tr>
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
          <p>${v.change < 0 ? '-' : v.change > 0 ? '+' : ''}${Math.abs(v.change)}</p>
        </td>
      </tr>`),
      '',
    );

    return `
    <h4 style="font-size: 14px;font-family: 'Arial'; padding-top:12px">Rekap</h4>
    <table style="width: 100%; border-collapse: collapse;border: none;" >
    <tbody>
      ${tableContent}
    </tbody>
      </table>
    `;
  };

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
      const borrowData: SingleReport[] = await this.prisma.$queryRaw`
        select 
        g."name", 
        g.unit, 
        concat('G-', g.id) id,
        sum(gh.quantity)::int as "change"
        from "Goods" g
        join "GoodsHistory" gh ON g.id = gh."idGoods"
        join "Request" r on gh."idRequest" = r.id
        where extract(month from gh."updatedAt") = ${parseInt(month)}
        and extract(year from gh."updatedAt") = ${parseInt(year)}
        and r.status in ('FINISH', 'ONGOING')
        and r."type" = 'BORROW'
        group by g.id
      `;

      const takeData: SingleReport[] = await this.prisma.$queryRaw`
        select 
        g."name", 
        g.unit, 
        concat('G-', g.id) id,
        sum(gh.quantity)::int as "change"
        from "Goods" g
        join "GoodsHistory" gh ON g.id = gh."idGoods"
        join "Request" r on gh."idRequest" = r.id
        where extract(month from gh."updatedAt") = ${parseInt(month)}
        and extract(year from gh."updatedAt") = ${parseInt(year)}
        and r.status = 'FINISH'
        and r."type" = 'TAKE'
        group by g.id
      `;

      const addData: SingleReport[] = await this.prisma.$queryRaw`
        select 
        g."name", 
        g.unit, concat('G-', g.id) id,
        sum(gh.quantity)::int as "change"
        from "Goods" g
        join "GoodsHistory" gh ON g.id = gh."idGoods"
        where extract(month from gh."updatedAt") = ${parseInt(month)}
        and extract(year from gh."updatedAt") = ${parseInt(year)}
        and gh."idRequest" isnull
        group by g.id
      `;

      const lastDayOfMonth = dayjs(firstDayMonth).endOf('month').format('YYYY-MM-DD');

      const recapData: GoodsReportQuery[] = await this.prisma.$queryRaw`
          select
          g."name",
          g.unit,
          concat('G-', g.id) id,
          (g.stock  -  (case when afterchange."changeAfter" isnull then 0 else afterchange."changeAfter"  end))::int "end",
          (g.stock  -  (case when addition.addition isnull then 0 else addition.addition  end) - (case when afterchange."changeAfter" isnull then 0 else afterchange."changeAfter"  end) - (case when monthchange."currentChange" isnull then 0 else monthchange."currentChange"  end))::int "start",
          (case when addition.addition isnull then 0 else addition.addition  end)::int + (case when monthchange."currentChange" isnull then 0 else monthchange."currentChange"  end)::int "change"
          from "Goods" g
          left join (
            select gh1."idGoods" id, sum(gh1.quantity) "changeAfter" from "GoodsHistory" gh1
            left join "Request" r1 on r1.id = gh1 ."idRequest"
            where gh1."updatedAt"::date > ${lastDayOfMonth}::date and r1.status in ('FINISH', 'ONGOING', null)
            group by gh1."idGoods"
          ) afterchange on afterchange.id = g.id
          left join (
            select gh1."idGoods" id, sum(gh1.quantity) "currentChange" from "GoodsHistory" gh1
            left join "Request" r1 on r1.id = gh1 ."idRequest"
            where extract(month from gh1."updatedAt") = ${parseInt(month)}
            and extract(year from gh1."updatedAt") = ${parseInt(year)}
            and r1.status in ('FINISH', 'ONGOING', null)
            group by gh1."idGoods"
          ) monthchange on monthchange.id = g.id
          left join (
            select gh2."idGoods" id, sum(gh2.quantity) addition from "GoodsHistory" gh2
            where extract(month from gh2."updatedAt") = ${parseInt(month)}
            and extract(year from gh2."updatedAt") = ${parseInt(year)}
            and gh2."idRequest" isnull
            group by gh2."idGoods"
          ) addition on addition.id = g.id
          join "GoodsHistory" gh on gh."idGoods" = g.id
          group by g.id, afterchange."changeAfter", monthchange."currentChange", addition.id, addition.addition
          having date_trunc('month', min(gh."updatedAt"))::date <= ${firstDayMonth}::date
      `;

      let htmlContent = fs.readFileSync(path.resolve(`html/report.html`), 'utf8');

      const borrowContent = this.generateSingleTypeReportHTML(borrowData, 'Peminjaman');
      const takeContent = this.generateSingleTypeReportHTML(takeData, 'Pengambilan');
      const additionContent = this.generateSingleTypeReportHTML(addData, 'Penambahan');

      const recapContent = this.generateRecapHTML(recapData);
      const concat = this.generateTableWrapper(borrowContent + takeContent + additionContent) + recapContent;
      htmlContent = htmlContent.replace(/{{\s*baseUrl\s*}}/gi, process.env.BACKEND_API);
      htmlContent = htmlContent.replace(/{{\s*content\s*}}/gi, concat);
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
    } catch (err) {
      console.log(err);
      return HttpReturn('Something wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
