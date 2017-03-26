import {Injectable} from "@angular/core";
import {Report} from "../models/report.model";

let REPORTS: Report[] = [
    {id: "1", title: "Report 1", description: "Report 1 description"},
    {id: "2", title: "Report 2", description: "Report 2 description"},
    {id: "3", title: "Report 3", description: "Report 3 description"},
    {id: "4", title: "Report 4", description: "Report 4 description"},
    {id: "5", title: "Report 5", description: "Report 5 description"},
    {id: "6", title: "Report 6", description: "Report 6 description"},
    {id: "7", title: "Report 7", description: "Report 7 description"},
    {id: "8", title: "Report 8", description: "Report 8 description"},
    {id: "9", title: "Report 9", description: "Report 9 description"},
];

@Injectable()
export class ReportService {

    getAll(): Report[] {
        return REPORTS;
    }

    remove(id: string): void {
        REPORTS = REPORTS.filter(report => report.id !== id);
    }

    add(title: string, description: string): void {
        REPORTS.push({
            id: REPORTS.length.toString(),
            title: title,
            description: description
        });
    }

}