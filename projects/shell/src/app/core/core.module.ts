import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
