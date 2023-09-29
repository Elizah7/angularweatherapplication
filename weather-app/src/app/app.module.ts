import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';

import {HomeComponent} from './MyComponents/home/home.component'
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailspageComponent } from './MyComponents/detailspage/detailspage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetailspageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
