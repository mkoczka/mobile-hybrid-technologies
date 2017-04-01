
import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent {

    constructor(
        private router: Router
    ) {}

    login() {
        this.router.navigate(['home']);
    }

    goToRegister() {
        this.router.navigate(['registration']);
    }

}
