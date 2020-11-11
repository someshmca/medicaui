import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import { AppComponent } from './app.component';
import { MainSideNavComponent } from './main-side-nav/main-side-nav.component';
import { LoginComponent } from './shared/login/login.component';
import { LoginService } from './shared/services/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSideNavComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
