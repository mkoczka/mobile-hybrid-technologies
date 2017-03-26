import { Component } from '@angular/core';
import {ReportService} from "../../app/services/report.service";
import {NavController} from "ionic-angular";
import {Dialogs} from "@ionic-native/dialogs";

@Component({
  selector: 'page-report-add',
  templateUrl: 'report-add.html'
})
export class ReportAddPage {

  public title: string;
  public description: string;

  constructor(
      private reportService: ReportService,
      private navCtrl: NavController,
      private dialogs: Dialogs
  ) {}

  add() {
    let message: string = 'Both title and description must be present.';
    if (this.title && this.description) {
      this.reportService.add(this.title, this.description);
      this.navCtrl.pop();
    } else {
      this.dialogs.alert(message)
          .catch(() => {alert(message)});
    }
  }

}
