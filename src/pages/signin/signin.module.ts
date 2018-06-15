import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth-service/user';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { SigninPage } from './signin';
import { IonicPageModule } from 'ionic-angular';

//import { SigninWithEmailPage } from '../signinwithemail/signinwithemail';

@NgModule({
  declarations: [
    SigninPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninPage),
  ],
  exports: [
    SigninPage
  ]
})
export class LoginPageModule {}
