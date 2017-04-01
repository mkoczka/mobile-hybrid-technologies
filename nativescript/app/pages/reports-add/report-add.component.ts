import { Component } from "@angular/core";
import {Router} from "@angular/router";
import {ReportService} from "../../reports/report.service";

@Component({
    selector: "report-add",
    moduleId: module.id,
    templateUrl: "./report-add.component.html",
})
export class ReportAddComponent {

    public title: string = '';
    public description: string = '';

    constructor(
        private router: Router,
        private reportService: ReportService
    ) {}

    submit() {
        this.reportService.add(this.title, this.description);
        this.goBack();
    }

    goBack() {
        this.router.navigate(['/home']);
    }
}
