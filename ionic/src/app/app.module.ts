import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {RegistrationPage} from "../pages/registration/registration";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {DashboardTabsPage} from "../pages/dashboard-tabs/dashboard-tabs";
import {ReportsPage} from "../pages/reports/reports";
import {ReportService} from "./services/report.service";
import {Dialogs} from "@ionic-native/dialogs";
import {ReportAddPage} from "../pages/report-add/report-add";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrationPage,
    DashboardTabsPage,
    DashboardPage,
    ReportsPage,
    ReportAddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrationPage,
    DashboardTabsPage,
    DashboardPage,
    ReportsPage,
    ReportAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReportService,
    Dialogs
  ]
})
export class AppModule {}
