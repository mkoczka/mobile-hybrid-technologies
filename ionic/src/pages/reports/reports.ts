import {Component, OnInit} from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';
import {Report} from "../../app/models/report.model";
import {ReportService} from "../../app/services/report.service";
import {NavController} from "ionic-angular";
import {ReportAddPage} from "../report-add/report-add";

@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {

  public reports: Report[];

  constructor(
      private reportService: ReportService,
      private dialogs: Dialogs,
      private navCtrl: NavController
  ) {
    this.getReports();
  }

  getReports() {
    this.reports = this.reportService.getAll();
  }

  openComments(report: Report) {
    let message: string = 'Not implemented yet. Report ID: ' + report.id;
    this.dialogs.alert(message)
        .catch(() => {alert(message)});
  }

  remove(report: Report) {
    let message: string = 'Are you sure you want to delete this report?';
    this.dialogs.confirm(message)
        .then(index => {
          if (index === 1) {
            this.reportService.remove(report.id);
            this.getReports();
          }
        })
        .catch(() => {
          if (window.confirm(message)) {
            this.reportService.remove(report.id);
            this.getReports();
          }
        });
  }

  search() {
    let message: string = 'Not implemented yet.';
    this.dialogs.alert(message)
        .catch(() => {alert(message)});
  }

  add() {
    this.navCtrl.push(ReportAddPage);
  }

}
