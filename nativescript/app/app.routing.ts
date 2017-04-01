import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {HomeComponent} from "./pages/home/home.component";
import {ReportAddComponent} from "./pages/reports-add/report-add.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "registration", component: RegistrationComponent },
    { path: "home", component: HomeComponent },
    { path: "report-add", component: ReportAddComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }