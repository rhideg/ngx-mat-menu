import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { NgxMatMenuComponent } from './ngx-mat-menu.component';
import { ColorDirective } from './directives/color.directive';
import { MatBadgeModule } from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [NgxMatMenuComponent,
    HeaderComponent,
    ColorDirective],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    BrowserModule,
    MatBadgeModule,
    MatExpansionModule,
  ],
  exports: [NgxMatMenuComponent]
})
export class NgxMatMenuModule { }
