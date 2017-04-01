
import { Component } from "@angular/core";
import {ReportService} from "./report.service";
import {Report} from "./report.model";
import {Router} from "@angular/router";

@Component({
    selector: "reports",
    moduleId: module.id,
    templateUrl: "./reports.component.html",
})
export class ReportsComponent {

    private reports: Report[];

    constructor(
        private router: Router,
        private reportService: ReportService
    ) {}

    ngOnInit() {
        this.reports = this.reportService.getAll();
    }

    goToAdd() {
        this.router.navigate(['report-add']);
    }

}
