import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RegistrationPage} from "../registration/registration";
import {DashboardTabsPage} from "../dashboard-tabs/dashboard-tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
      public navCtrl: NavController
  ) {}

  login() {
    this.loginSuccess();
  }

  loginSuccess() {
    this.navCtrl.push(DashboardTabsPage);
  }

  goToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

}
