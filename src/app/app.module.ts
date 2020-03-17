import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatMenuModule } from 'projects/ngx-mat-menu/src/public-api';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { DialogTestComponent } from './dialogs/dialog-test/dialog-test.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SettingsComponent,
    DialogTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMatMenuModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    HammerModule
  ],
  entryComponents: [
    DialogTestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
