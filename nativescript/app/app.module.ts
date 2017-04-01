import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {HomeComponent} from "./pages/home/home.component";
import {ReportsComponent} from "./reports/reports.component";
import {ReportService} from "./reports/report.service";
import {DashboardComponent} from "./mainboard/dashboard.component";
import {ReportAddComponent} from "./pages/reports-add/report-add.component";
import {NativeScriptFormsModule} from "nativescript-angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        HomeComponent,
        DashboardComponent,
        ReportsComponent,
        ReportAddComponent
    ],
    providers: [
        ReportService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
