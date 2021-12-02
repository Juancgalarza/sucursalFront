import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackService } from '../shared/snack/snack.service';
import { CookieService } from 'ngx-cookie-service';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers:[
    SnackService,
    CookieService
  ]
})
export class AuthModule { }
