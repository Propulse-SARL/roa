import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RapportsService } from '../../../services/rapports.service';
import { Report } from '../my-reports/my-reports.component';
@Component({
  selector: 'app-view-report',
  imports: [],
  templateUrl: './view-report.component.html',
  styleUrl: './view-report.component.scss'
})
export class ViewReportComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private reportService = inject(RapportsService)
  reportId!: number;
  report!: Report[]
  printMode: boolean = false
  ngOnInit(): void {
    //Affichage du rapport
    const idParam = this.route.snapshot.paramMap.get('id');
    this.reportId = idParam ? Number(idParam) : 0;
    // this.report = this.reportService.getReports(this.reportId);
    console.log(this.report);

    //Impréssion du rapport
    const printParam = this.route.snapshot.queryParamMap.get('print');

    if (printParam == 'true' && this.report) {
      this.printReport()
    }
  }

  printReport() {
    this.printMode = true
    setTimeout(() => {
      window.print()
    }, 0);
    setTimeout(() => {
      this.printMode = false
    }, 5000)
  }
}
