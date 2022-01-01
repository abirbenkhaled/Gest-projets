import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingappModule } from './routingapp.module';
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RoutingappModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
