import { Component } from '@angular/core';
import {DashboardPage} from "../dashboard/dashboard";
import {ReportsPage} from "../reports/reports";

@Component({
  selector: 'page-dashboard-tabs',
  templateUrl: 'dashboard-tabs.html'
})
export class DashboardTabsPage {

  public dashboardPage = DashboardPage;
  public reportsPage = ReportsPage;

}
