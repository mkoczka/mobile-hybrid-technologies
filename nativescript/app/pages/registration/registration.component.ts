
import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "registration",
    moduleId: module.id,
    templateUrl: "./registration.component.html",
})
export class RegistrationComponent {

    constructor(
        private router: Router
    ) {}

    register() {
        alert('REGISTER');
    }

    goBack() {
        this.router.navigate(['login']);
    }

}
