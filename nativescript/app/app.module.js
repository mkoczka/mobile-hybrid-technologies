"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var registration_component_1 = require("./pages/registration/registration.component");
var home_component_1 = require("./pages/home/home.component");
var reports_component_1 = require("./reports/reports.component");
var report_service_1 = require("./reports/report.service");
var dashboard_component_1 = require("./mainboard/dashboard.component");
var report_add_component_1 = require("./pages/reports-add/report-add.component");
var nativescript_angular_1 = require("nativescript-angular");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptFormsModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            registration_component_1.RegistrationComponent,
            home_component_1.HomeComponent,
            dashboard_component_1.DashboardComponent,
            reports_component_1.ReportsComponent,
            report_add_component_1.ReportAddComponent
        ],
        providers: [
            report_service_1.ReportService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxpRUFBK0Q7QUFDL0Qsc0ZBQWtGO0FBQ2xGLDhEQUEwRDtBQUMxRCxpRUFBNkQ7QUFDN0QsMkRBQXVEO0FBQ3ZELHVFQUFtRTtBQUNuRSxpRkFBNEU7QUFDNUUsNkRBQTZEO0FBMkI3RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF6QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOENBQXVCO1lBQ3ZCLDhCQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCw4Q0FBcUI7WUFDckIsOEJBQWE7WUFDYix3Q0FBa0I7WUFDbEIsb0NBQWdCO1lBQ2hCLHlDQUFrQjtTQUNyQjtRQUNELFNBQVMsRUFBRTtZQUNQLDhCQUFhO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVnaXN0cmF0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlcG9ydHNDb21wb25lbnR9IGZyb20gXCIuL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVwb3J0U2VydmljZX0gZnJvbSBcIi4vcmVwb3J0cy9yZXBvcnQuc2VydmljZVwiO1xuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL21haW5ib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlcG9ydEFkZENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvcmVwb3J0cy1hZGQvcmVwb3J0LWFkZC5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgICAgICBSZXBvcnRzQ29tcG9uZW50LFxuICAgICAgICBSZXBvcnRBZGRDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBSZXBvcnRTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==